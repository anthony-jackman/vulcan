<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);
const props = defineProps({
  modalActive: Boolean
});
const close = () => emit('close');

</script>

<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <div class="modal-background" @click="close"></div>
      <transition name="modal-animation-inner">
        <div class="modal-inner" v-show="modalActive">
          <!-- <i @click="close"><span>X</span></i> -->
          <i @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px">
              <g transform="">
                <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M18,21h-12c-1.7,0 -3,-1.3 -3,-3v-12c0,-1.7 1.3,-3 3,-3h12c1.7,0 3,1.3 3,3v12c0,1.7 -1.3,3 -3,3z" opacity="0.35"></path>
                    <path d="M13.4,12l2.8,-2.8c0.4,-0.4 0.4,-1 0,-1.4c-0.4,-0.4 -1,-0.4 -1.4,0l-2.8,2.8l-2.8,-2.8c-0.4,-0.4 -1,-0.4 -1.4,0c-0.4,0.4 -0.4,1 0,1.4l2.8,2.8l-2.8,2.8c-0.4,0.4 -0.4,1 0,1.4c0.2,0.2 0.5,0.3 0.7,0.3c0.2,0 0.5,-0.1 0.7,-0.3l2.8,-2.8l2.8,2.8c0.2,0.2 0.5,0.3 0.7,0.3c0.2,0 0.5,-0.1 0.7,-0.3c0.4,-0.4 0.4,-1 0,-1.4z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </i>
          <!--  Modal Contents -->
          <slot />
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);

  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 64px 16px;

    i {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        color: crimson;
      }
    }
    button {
      padding: 20px 30px;
      border: none;
      font-size: 16px;
      background-color: crimson;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>