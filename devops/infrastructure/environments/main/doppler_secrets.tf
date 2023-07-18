resource "doppler_secret" "ci_commons_local_app_port" {
  project = local.ci_commons.project
  config = local.ci_commons.config
  name = "LOCAL_APP_PORT"
  value = data.doppler_secrets.ci_commons.map.LOCAL_APP_PORT == local.local_env.APP_PORT ? sum([data.doppler_secrets.ci_commons.map.LOCAL_APP_PORT, 1]) : data.doppler_secrets.ci_commons.map.LOCAL_APP_PORT
}

resource "doppler_secret" "ci_commons_local_vite_port" {
  project = local.ci_commons.project
  config = local.ci_commons.config
  name = "LOCAL_VITE_PORT"
  value = data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT == local.local_env.WEBSOCKET_PORT ? sum([data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT, 1]) : data.doppler_secrets.ci_commons.map.LOCAL_VITE_PORT
}
