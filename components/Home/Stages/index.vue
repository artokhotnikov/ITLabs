<script setup lang="ts"></script>

<template>
  <section class="section stages">
    <div class="container">
      <h2 class="stages-title title">С НАМИ ПРОСТО</h2>
      <div class="stages-list">
        <div class="stage">
          <div class="stage-line stage-line-one">
            <HomeStagesLineOne />
          </div>
          <div class="stage-container">
            <div class="stage-num">1</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">Подача заявки</div>
              <div class="stage-text text text-md">
                Мы ответим вам в течении суток с момента подачи заявки
              </div>
            </div>
          </div>
          <div class="stage-line stage-line-two">
            <HomeStagesLineTwo />
          </div>
        </div>
        <div class="stage">
          <div class="stage-container">
            <div class="stage-num">2</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">Обработка запроса</div>
              <div class="stage-text text text-md">
                Анализ задачи, поиск методов и решений, консультация со
                специалистами отдельных отраслей
              </div>
            </div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-line stage-line-three">
            <HomeStagesLineThree />
          </div>
          <div class="stage-container">
            <div class="stage-num">3</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">Старт</div>
              <div class="stage-text text text-md">
                Назначение ответственного менеджера, сбор и обработка
                дополнительной информации по проекту, своевременная отчетность
              </div>
            </div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-container">
            <div class="stage-num">4</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">Релиз</div>
              <div class="stage-text text text-md">
                Публикация готового решения, сбор обратной связи, устранение
                ошибок, подготовка закрывающей документации
              </div>
            </div>
          </div>
        </div>
        <div class="stage">
          <div class="stage-container">
            <div class="stage-num">5</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">
                Ввод в эксплуатацию
              </div>
              <div class="stage-text text text-md">
                Проведение интеграционных тестов и закрытие проекта
              </div>
            </div>
          </div>
          <div class="stage-line stage-line-four">
            <HomeStagesLineFour />
          </div>
        </div>
        <div class="stage">
          <div class="stage-container">
            <div class="stage-num">6</div>
            <div class="stage-content">
              <div class="stage-subtitle subtitle bold">Поддержка</div>
              <div class="stage-text text text-md">
                Поддержка и развитие готового продукта, обработка новых
                запросов, расширение функционала.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '/assets/scss/variables';

.title {
  color: $text-blue;
}

.stages {
  &-title {
    text-align: center;
    margin: 0 0 40px;
  }

  &-list {
    max-width: 1020px;
    margin: 0 auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px 20px;
    align-items: center;
    @media (max-width: $md3 + px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
}

.stage {
  color: $text-secondary;
  position: relative;

  @media (max-width: $md3 + px) {
    &:not(:last-child):after {
      content: '';
      position: absolute;
      left: 31px;
      top: 100%;
      width: 2px;
      background: $bg-white;
      border-radius: 4px;
    }
    &:nth-child(1):after {
      height: 28px;
      margin: 6px 0;
    }
    &:nth-child(2):after {
      height: 44px;
    }
    &:nth-child(3):after {
      height: 44px;
      margin-top: -10px;
    }
    &:nth-child(4):after {
      height: 28px;
    }
    &:nth-child(5):after {
      height: 34px;
      margin-top: 4px;
    }
  }

  &-line {
    position: absolute;
    right: -52px;
    width: 522px;
    color: $text-white;
    @media (max-width: $md1 + px) {
      width: 460px;
    }
    @media (max-width: $md2 + px) {
      width: calc(100% + 20px);
    }
    @media (max-width: $md3 + px) {
      display: none;
    }

    &-one {
      top: -48px;
    }

    &-two {
      bottom: -68px;
    }

    &-three {
      bottom: -56px;
    }

    &-four {
      bottom: -51px;
    }

    svg {
      width: 100%;
      height: auto;
    }
  }

  &-container {
    display: flex;
    align-items: center;
    gap: 40px;
    min-height: 64px;
  }

  &-num {
    font-size: 24px;
    color: $text-blue;
    font-family: $fontSecond;
    font-weight: 700;
    flex-shrink: 0;
    width: 64px;
    height: 64px;
    background: $bg-white-alpha;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &-subtitle {
    margin: 0 0 20px;
  }

  &-content {
    @media (max-width: $md3 + px) {
      max-width: 240px;
    }
  }
}

.dark .stage {
  color: $text-white;

  &-num {
    background: $bg-white-alpha-5;
  }
}
</style>
