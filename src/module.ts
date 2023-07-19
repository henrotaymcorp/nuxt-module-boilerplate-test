import { defineNuxtModule, createResolver, addImports } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@henrotaymcorp/nuxt-module-boilerplate-test",
    configKey: "nuxtModuleBoilerplateTest",
  },
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addImports({
      name: "useEndpoint",
      from: resolve("./runtime/composables/index"),
    });
    addImports({
      name: "useModel",
      from: resolve("./runtime/composables/index"),
    });
  },
});
