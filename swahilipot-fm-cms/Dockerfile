FROM node:22-alpine AS build
WORKDIR /app
RUN npm i -g npm@12.2.2
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund
COPY . .
ARG SANITY_STUDIO_PROJECT_ID
ARG SANITY_STUDIO_DATASET
RUN npx sanity build dist --yes

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/healthz || exit 1
CMD ["nginx", "-g", "daemon off;"]