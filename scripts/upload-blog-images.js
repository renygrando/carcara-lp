const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const STRAPI_URL = 'https://strapi.carcara.ai';
const STRAPI_TOKEN = '6d7c46cb833f1f6099984a0e81ad81d7bec3410901b996887fbe8f5027b06619be5205a36e2ae58a87a8a272b9bdedd37c60627ad866b5569175d443d439954c5da54ccc8f6b4feddc88130e9b1d267e9ca26dd06dc67611c482eaa81bda932b48e3c1fb45a3caad26d0a276f5805f672906a26459ae4b93f4c9c230e80cf73d';
const IMAGES_DIR = '/Users/renygrando/Downloads/Textos do Blog/images';

// Mapeamento de imagens por artigo (baseado no HTML original)
const articleImages = {
  'ia-e-associativismo-o-que-muda-na-pratica': ['image15.png', 'image17.png'],
  'novo-protagonismo-associativismo-ia': ['image16.png'],
  'dados-nova-moeda-associativismo': ['image6.png'],
  'ia-nova-infraestrutura-seculo': ['image13.png', 'image2.png'],
  'construir-software-personalizado-ia': ['image3.png', 'image8.png'],
  'ia-reduzir-erros-gastronomia': ['image14.png', 'image12.png'],
  'ia-reduz-custos-associacoes': ['image9.png', 'image7.png'],
  'forca-whatsapp-empresario-brasileiro': ['image4.png', 'image18.png', 'image1.png']
};

async function uploadImage(imagePath) {
  try {
    const formData = new FormData();
    formData.append('files', fs.createReadStream(imagePath));

    const response = await fetch(`${STRAPI_URL}/api/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      },
      body: formData
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${error}`);
    }

    const data = await response.json();
    console.log(`  ✅ Imagem enviada: ${path.basename(imagePath)} (ID: ${data[0].id})`);
    return data[0];
  } catch (error) {
    console.error(`  ❌ Erro ao enviar ${path.basename(imagePath)}:`, error.message);
    return null;
  }
}

async function getBlogPosts() {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blog-posts?pagination[pageSize]=100`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Erro ao buscar posts:', error.message);
    return [];
  }
}

async function updatePostWithImages(documentId, imageIds) {
  try {
    const response = await fetch(`${STRAPI_URL}/api/blog-posts/${documentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      },
      body: JSON.stringify({
        data: {
          coverImage: imageIds[0] // Primeira imagem como capa
        }
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${error}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`  ❌ Erro ao atualizar post:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Iniciando upload de imagens e atualização dos posts...\n');

  // Buscar todos os posts
  console.log('📥 Buscando posts do blog...');
  const posts = await getBlogPosts();
  console.log(`   Encontrados ${posts.length} posts\n`);

  let updatedCount = 0;

  for (const post of posts) {
    const slug = post.slug;
    const title = post.title;
    const documentId = post.documentId;
    const images = articleImages[slug];

    if (!images || images.length === 0) {
      console.log(`⏭️  Post "${title}" não tem imagens mapeadas\n`);
      continue;
    }

    console.log(`📝 Processando: ${title}`);
    console.log(`   Slug: ${slug}`);
    
    const uploadedImages = [];
    
    for (const imageName of images) {
      const imagePath = path.join(IMAGES_DIR, imageName);
      
      if (!fs.existsSync(imagePath)) {
        console.log(`  ⚠️  Imagem não encontrada: ${imageName}`);
        continue;
      }

      const uploaded = await uploadImage(imagePath);
      if (uploaded) {
        uploadedImages.push(uploaded.id);
      }
      
      // Delay entre uploads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    if (uploadedImages.length > 0) {
      console.log(`  🔗 Vinculando imagens ao post...`);
      const updated = await updatePostWithImages(documentId, uploadedImages);
      if (updated) {
        console.log(`  ✅ Post atualizado com ${uploadedImages.length} imagem(ns)\n`);
        updatedCount++;
      }
    }

    // Delay entre posts
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log(`\n📊 Resumo:`);
  console.log(`   ✅ Posts atualizados com imagens: ${updatedCount}`);
  console.log(`   📁 Total de posts: ${posts.length}`);
}

main();
