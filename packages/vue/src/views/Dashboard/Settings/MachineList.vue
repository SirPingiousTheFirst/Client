<template>
  <p>
    Machine List
  </p>
  <option-field label="Show Network Chart" description="Show sum transmit of physical interfaces on the machine list (laggy)">
    <base-switch v-model="state.settings.general.enable_totals" />
  </option-field>
</template>

<script setup lang="ts">
import { useState } from "/@/app";
import BaseSwitch from "/@/components/base/BaseSwitch.vue";
import OptionField from "/@/components/OptionField.vue";
const state = useState();
</script>
