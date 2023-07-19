<template>
  <div class="flex flex-col text-base">
    <span>{{ invoice.sayHello() }}</span>
    <span>{{ worksite.sayHi() }}</span>
    <span>{{ worksiteEndpoint.worksite() }}</span>
    <span>{{ invoiceEndpoint.invoices() }}</span>
  </div>
</template>

<script setup lang="ts">
import { MODEL_TYPE } from "../../src/lib";
import { useModel, useEndpoint } from "#imports";

const invoice = useModel(MODEL_TYPE.INVOICE);
const worksite = useModel("worksite");
const invoiceEndpoint = useEndpoint("invoice");
const worksiteEndpoint = useEndpoint(MODEL_TYPE.WORKSITE);
</script>
