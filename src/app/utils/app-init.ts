import {KeycloakService} from 'keycloak-angular';

export function keycloakInitializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: 'https://auth.metadatacenter.orgx/auth',
            realm: 'CEDAR',
            clientId: 'cedar-angular-app'
          },
          initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false
          },
          enableBearerInterceptor: true,
          bearerExcludedUrls: [
            '/assets',
            '/clients/public'
          ],
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
