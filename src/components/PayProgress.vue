<template>
  <div class="progress">
    <div class="progress-bar">
      <div class="step1 step">
        <span class="material-symbols-outlined"> check_circle </span>
      </div>
      <div class="step2 step">
        <span class="material-symbols-outlined"> check_circle </span>
      </div>
      <div class="step3 step">
        <span class="material-symbols-outlined"> check_circle </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.progress {
  position: relative;
  overflow: unset;
  padding: 1px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
  .progress-bar {
    height: 14px;
    border-radius: 4px;
    background-color: #86e01e;
    background-image: -moz-linear-gradient(
      top,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.05)
    );
    transition: 0.4s linear;
    transition-property: width, background-color;
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25),
      inset 0 1px rgba(255, 255, 255, 0.1);
    .step {
      &.step1 {
        left: 33.33%;
      }
      &.step2 {
        left: 66.67%;
      }
      &.step3 {
        left: 100%;
      }
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: #86e01e;
      background-image: -moz-linear-gradient(
        top,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.05)
      );
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.05)
      );
      width: 40px;
      height: 40px;
      transition: all 0.4s;
      top: 50%;
      transform: translate(-50%, -50%) scale(0);
      &.active {
        transition-delay: 0.4s;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
}
</style>
