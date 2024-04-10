<script setup lang="ts">
import { shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker
} from 'vue-yandex-maps'

const customization = [
  // Делаем прозрачными все геометрии водных объектов.
  {
    tags: {
      all: ['water']
    },
    elements: 'geometry',
    stylers: [
      {
        opacity: 0
      }
    ]
  },
  // Меняем цвет подписей для всех POI и узлов сети общественного транспорта.
  {
    tags: {
      any: ['poi', 'transit_location']
    },
    elements: 'label.text.fill',
    stylers: [
      {
        color: '#0000DD'
      }
    ]
  }
]
//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)
</script>

<template>
  <div class="map">
    <yandex-map
      v-model="map"
      :settings="{
        location: {
          center: [53.209376, 56.880786],
          zoom: 16
        },
        theme: 'dark'
      }"
      width="100%"
      height="100%"
    >
      <yandex-map-default-scheme-layer :settings="{ customization }" />
      <yandex-map-default-features-layer />
      <yandex-map-marker
        :settings="{ coordinates: [53.21079, 56.880532] }"
        position="top left-center"
      >
        <div class="marker">
          <img
            class="pin"
            src="/assets/img/yandex_map/marker.svg"
            alt="marker"
          />
        </div>
      </yandex-map-marker>
    </yandex-map>
  </div>
</template>

<style scoped lang="scss">
.map {
  width: 100%;
  height: 790px;
  border-radius: 40px;
  overflow: hidden;
}

.marker {
  width: 68px;
  height: 74px;

  img {
    position: absolute;
  }
}
</style>
