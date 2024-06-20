<script setup lang="ts">
import clients from '~/data/clients'
import reviews from '~/data/reviews'

definePageMeta({
  title: 'О компании'
})
useHead({
  title: 'О компании'
})

const breadcrumbs = [
  {
    title: 'О компании',
    path: 'about'
  }
]

const { isOpen, open } = useOpen()

const currentViewIndex = ref(0)

const openGallery = (index: number) => {
  currentViewIndex.value = index
  open()
}

const gallery = computed(() => reviews.map((item) => item.image))

const openHH = () => {
  window.open('https://izhevsk.hh.ru/employer/5234433', '_blank')
}
</script>

<template>
  <div class="page about">
    <div class="container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="about-img">
        <img src="/img/about_page/main.png" alt="О компании" />
      </div>
      <h1 class="about-title title title-s">
        ITL Лаборатория Информационных технологий
      </h1>
      <div class="about-subtitle subtitle">
        ведущий отечественный разработчик программного обеспечения
      </div>
      <div class="about-list">
        <div class="about-item">
          <h4 class="title">250+</h4>
          <div class="text">
            Выполненных проектов для компаний и государственных учреждений
          </div>
        </div>
        <div class="about-item">
          <h4 class="title">93%</h4>
          <div class="text">
            Клиентов рекомендуют нас своим коллегам или приходят по рекомендации
          </div>
        </div>
        <div class="about-item">
          <h4 class="title">7+</h4>
          <div class="text">
            Лет компания ITL производит веб-сайты, программное обеспечение для
            интерактивных и голографических устройств, а так же устройств
            самообслуживания
          </div>
        </div>
      </div>
      <section class="description">
        <h2 class="section-title title title-s">О нас</h2>
        <div class="text">
          Компания ITLabs работает на рынке с 2015 года. Наша компания разделена
          на подразделения: клиентоориентированный менеджмент, тестировщики,
          веб-разработчики,фронтенд-разработчики, бэкенд-разработчики,
          Full-stack разработчики, разработчики программного обеспечения,
          разработчики мобильных приложений, аналитики, дизайнеры ui/ux,
          прикладная разработка, отдел маркетинга, отдел продаж.
          <br /><br />
          Наша слаженная экосистема успешно работает с проектами, соблюдая сроки
          и договоренности. У нас длительные партнерские отношения с BM Group,
          AxeTech, Intechirs, NexTouch, Liga Group и другими производителями
          интерактивного оборудования.
          <br /><br />
          На основе интерактивной разработки мы накопили богатый опыт в решении
          задач: оснащение музеев, подготовка презентационных материалов,
          разработка интерактивных квестов, отрисовка навигационной карты,
          комплексное оснащение выставков. В веб-разработке мы уверенно работаем
          с PHP и Symfony для создания надежных бэкендов, а также с Vue.js для
          разработки современных и интерактивных фронтенд приложений.
          <br /><br />
          Мы создаем проекты на Python используя нейросети, что позволяет нам
          создавать интеллектуальные системы. В дополнение к этому, мы
          разрабатываем прикладные решения на C# с использованием .NET, что
          позволяет нам создавать высокопроизводительные и масштабируемые
          приложения.
          <br /><br />
          Кроме программирования, мы активно занимаемся дизайном и 3D
          моделированием, используя Unity.
          <br /><br />
          Наши компетенции охватывают весь спектр разработки, от концепции и
          дизайна до полного цикла разработки и внедрения программных решений.
          Мы берем в работу задачи любой сложности. Расскажите нам, как вы
          видите проект, а мы реализуем его и предложим оптимальные решения.
          <br /><br />
          Компания расширяется, если вы хотите поработать в команде сильных
          специалистов, присылайте свои резюме на почту: hr@itlabs.top
        </div>
        <Button class="headhunter" @click="openHH">
          Вакансии на HeadHunter
        </Button>
      </section>
      <section class="section clients">
        <h2 class="section-title title title-s">Наши клиенты</h2>
        <div class="clients-list">
          <div v-for="client in clients" :key="client.id" class="client">
            <img :src="client.imageMono" :alt="client.title" />
            <img :src="client.imageNormal" :alt="client.title" />
          </div>
        </div>
      </section>
      <section class="section reviews">
        <h2 class="section-title title title-s">Отзывы и рекомендации</h2>
        <div class="reviews-list">
          <div
            v-for="(review, index) in reviews"
            :key="review.id"
            class="review"
          >
            <div class="review-img" @click="openGallery(index)">
              <img :src="review.image.image" alt="" />
              <div class="review-icon">
                <IconsEye />
              </div>
            </div>
            <div class="review-title text text-md" v-html="review.title" />
            <div
              class="review-subtitle text text-md bold"
              v-html="review.subtitle"
            />
          </div>
        </div>
        <ClientOnly>
          <transition name="fade">
            <GalleryModal
              v-if="isOpen"
              v-model:is-active="isOpen"
              :index="currentViewIndex"
              :gallery="gallery"
              local
            />
          </transition>
        </ClientOnly>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';
@import '/assets/scss/mixins';

.dark {
  .text,
  .subtitle {
    color: $text-white;
  }

  .review {
    background: $bg-white-alpha-5;

    &:hover {
      .text {
        color: $text-secondary;
      }
    }
  }
}

.title {
  color: $text-blue;
  text-align: center;
}

.subtitle {
  color: $text-secondary;
  text-align: center;
}

.text {
  color: $text-secondary;
  text-align: center;
}

.about {
  &-img {
    @include img;
    max-width: 1020px;
    margin: 0 auto 40px;
    @media (max-width: $md3 + px) {
      margin: 0 auto 64px;
    }
  }

  &-title {
    margin: 0 0 20px;
  }

  &-subtitle {
    margin: 0 0 40px;
    @media (max-width: $md3 + px) {
      font-weight: 700;
      margin: 0 0 32px;
    }
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 0 0 65px;
    @media (max-width: $md3 + px) {
      grid-template-columns: 1fr;
      gap: 16px;
      margin: 0 0 32px;
    }
  }

  &-item {
    .title {
      margin: 0 0 20px;
    }
  }
}

.clients {
  &-list {
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    justify-content: center;
    align-items: center;
    @media (max-width: $md3 + px) {
      gap: 32px;
    }
  }
}

.section {
  &-title {
    margin: 0 0 40px;
  }
}

.client {
  @include img;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: $md3 + px) {
    max-width: 150px;
    &:nth-child(7) {
      max-width: 196px;
    }
  }

  &:hover {
    img {
      &:first-child {
        opacity: 0;
      }

      &:last-child {
        opacity: 1;
      }
    }
  }

  img {
    transition: opacity 0.3s ease-in-out;

    &:first-child {
      opacity: 1;
    }

    &:last-child {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }
  }
}

.reviews {
  &-list {
    @include no-scroll;
    display: flex;
    gap: 20px;
    max-width: 1020px;
    margin: 0 auto;
    @media (max-width: $md1 + px) {
      max-width: 100%;
      overflow-x: auto;
      overflow-y: visible;
    }
  }
}

.review {
  flex: 0 0 188px;
  padding: 16px;
  border-radius: 20px;
  background: $bg-white-alpha-20;
  transition: background 0.3s ease;
  cursor: pointer;

  &-img {
    @include img;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
  }

  &-icon {
    color: $text-white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;

    svg {
      width: 32px;
      height: 32px;
    }
  }

  &-title {
    text-align: left;
    margin: 20px 0 8px;
  }

  &-subtitle {
    text-align: left;
  }

  @media (min-width: $md2 + px) {
    &:hover {
      background: $bg-white;
    }
    .review-img:before {
      content: '';
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(45, 55, 68, 0.2);
      display: block;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 20px;
    }
    .review-img:hover {
      &:before {
        opacity: 1;
      }

      .review-icon {
        opacity: 1;
        z-index: 2;
      }
    }
  }
}

.headhunter {
  margin: 40px auto 0;
  max-width: 450px;
  width: 100%;
}
</style>
