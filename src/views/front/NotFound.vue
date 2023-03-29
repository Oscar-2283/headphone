<template>
  <div class="main error-height">
    <div class="container">
      <div class="w-100 h-100 mt-10">
        <h1 class="text-center text-primary">404 PAGE NOT FOUND</h1>
        <div class="d-flex justify-content-center mt-5">
          <span class="mx-auto material-symbols-outlined error-symbols">
            sentiment_dissatisfied
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-height {
  height: calc(100vh - 300px);
}
.error-symbols {
  font-size: 10rem;
  color: #da6a19;
}
</style>
