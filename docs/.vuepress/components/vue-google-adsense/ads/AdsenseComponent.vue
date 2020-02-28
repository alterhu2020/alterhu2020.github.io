<template>
  <div :class="rootClass">
    <script2
      :src="ADS_SCRIPT"
      type="text/javascript"
      async="true"
    />
    <ins
      :class="insClass"
      :style="insStyle"
      :data-ad-client="dataAdClient"
      :data-ad-slot="dataAdSlot"
      :data-ad-test="dataAdTest"
      :data-ad-format="dataAdFormat"
      :data-full-width-responsive="dataFullWidthResponsive"
      class="adsbygoogle"
    />
    <script2
      v-if="isNonPersonalizedAds"
      type="text/javascript"
    >
      (adsbygoogle = window.adsbygoogle || []).push({}).requestNonPersonalizedAds = 1;
    </script2>
    <script2 type="text/javascript">
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script2>
  </div>
</template>

<script>

// (adsbygoogle = window.adsbygoogle || []).push({
//   google_ad_client: "{{ dataAdClient }}",
//   enable_page_level_ads: true
// }).requestNonPersonalizedAds = 1;
import constant from '../utils/constant'
import props from '../utils/props'
import assign from '../utils/assign'

export default {
  name: 'Adsense',
  props: assign.__assign(props, {
    dataFullWidthResponsive: {
      type: Boolean,
      default: true
    }
  }),
  data () {
    return {
      ADS_SCRIPT: constant.ADS_SCRIPT
    }
  }
}
</script>
