<script setup lang="ts">
import mapConfig from '~/data/mapConfig.json'
import { shallowRef } from 'vue'
import type { YMap } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapMarker
} from 'vue-yandex-maps'

const { width } = useWindowSize()

const sm = computed(() => width.value <= 767)
const customization = mapConfig
//Можно использовать для различных преобразований
const map = shallowRef<null | YMap>(null)
const hasAutoRotate = ref(true)
const mapAzimuth = ref(0)
const mapTilt = ref((40 * Math.PI) / 180)
const show = ref(false)
const frame = ref<null | number>(null)
const center = ref([53.20704211561477, 56.87940830777453])
// Automatically rotate the camera
const startAutoRotationCamera = () => {
  if (!map.value) return

  if (hasAutoRotate.value) {
    //  Divide degrees by 100 to slow rotation to ~20 degrees / sec
    mapAzimuth.value = map.value.azimuth + (10 * Math.PI) / 180 / 100
    // Request the next frame of the animation
    frame.value = requestAnimationFrame(startAutoRotationCamera)

    // If the automatic rotation mode is stopped then cancel the request for the next animation frame
  } else if (frame.value) cancelAnimationFrame(frame.value)
}

watch(
  [hasAutoRotate, map],
  () => {
    if (typeof requestAnimationFrame === 'undefined') return
    requestAnimationFrame(startAutoRotationCamera)
  },
  {
    immediate: true
  }
)

onBeforeUnmount(() => {
  if (frame.value) {
    hasAutoRotate.value = false
    cancelAnimationFrame(frame.value)
  }
})
onMounted(() => {
  if (sm.value) {
    center.value = [53.211524774906344, 56.8799955436624]
  }
  setTimeout(() => {
    show.value = true
  }, 500)
})
</script>

<template>
  <yandex-map
    v-show="show"
    v-model="map"
    :settings="{
      location: {
        center,
        zoom: 16.5
      },
      camera: {
        azimuth: mapAzimuth,
        tilt: mapTilt,
        duration: hasAutoRotate ? 0 : 250
      }
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
        <img class="pin" src="/assets/img/yandex_map/marker.svg" alt="marker" />
      </div>
    </yandex-map-marker>
  </yandex-map>
</template>

<style scoped lang="scss">
.marker {
  width: 68px;
  height: 74px;

  img {
    position: absolute;
  }
}
</style>
