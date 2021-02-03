import React from 'react';

const Icons = () => (
  <svg
    style={{
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden',
    }}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <symbol id="icon-grid" viewBox="0 0 32 32">
        <title>grid</title>
        <path d="M24.547 11.752v-4.298h-4.298v4.298h4.298zM24.547 18.149v-4.298h-4.298v4.298h4.298zM24.547 24.547v-4.298h-4.298v4.298h4.298zM18.149 11.752v-4.298h-4.298v4.298h4.298zM18.149 18.149v-4.298h-4.298v4.298h4.298zM18.149 24.547v-4.298h-4.298v4.298h4.298zM11.752 11.752v-4.298h-4.298v4.298h4.298zM11.752 18.149v-4.298h-4.298v4.298h4.298zM11.752 24.547v-4.298h-4.298v4.298h4.298zM24.547 5.354c1.15 0 2.099 0.95 2.099 2.099v17.093c0 1.15-0.95 2.099-2.099 2.099h-17.093c-1.15 0-2.099-0.95-2.099-2.099v-17.093c0-1.15 0.95-2.099 2.099-2.099h17.093z" />
      </symbol>
      <symbol id="icon-text" viewBox="0 0 32 32">
        <title>text</title>
        <path d="M24 5.333h-16c-1.1 0-2 0.9-2 2v17.333c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2v-17.333c0-1.1-0.9-2-2-2zM23.333 24h-14.667v-16h14.667v16zM11.333 14.667h9.333v1.333h-9.333zM11.333 17.333h9.333v1.333h-9.333zM11.333 20h9.333v1.333h-9.333zM11.333 12h9.333v1.333h-9.333z" />
      </symbol>
      <symbol id="icon-add" viewBox="0 0 32 32">
        <title>add</title>
        <path d="M26.646 17.5h-9.145v9.145h-3.001v-9.145h-9.145v-3.001h9.145v-9.145h3.001v9.145h9.145v3.001z" />
      </symbol>
      <symbol id="icon-close" viewBox="0 0 32 32">
        <title>close</title>
        <path d="M26.646 7.498l-8.502 8.502 8.502 8.502-2.143 2.143-8.502-8.502-8.502 8.502-2.143-2.143 8.502-8.502-8.502-8.502 2.143-2.143 8.502 8.502 8.502-8.502z" />
      </symbol>
      <symbol id="icon-delete" viewBox="0 0 32 32">
        <title>delete</title>
        <path d="M24.278 6.5v2.389h-16.556v-2.389h4.111l1.222-1.167h5.889l1.222 1.167h4.111zM8.889 24.278v-14.222h14.222v14.222c0 1.278-1.111 2.389-2.389 2.389h-9.444c-1.278 0-2.389-1.111-2.389-2.389z" />
      </symbol>
      <symbol id="icon-drag_handle" viewBox="0 0 32 32">
        <title>drag_handle</title>
        <path d="M5.313 20v-2.688h21.375v2.688h-21.375zM26.688 12v2.688h-21.375v-2.688h21.375z" />
      </symbol>
      <symbol id="icon-keyboard_arrow_down" viewBox="0 0 32 32">
        <title>keyboard_arrow_down</title>
        <path d="M9.875 10.438l6.125 6.125 6.125-6.125 1.875 1.875-8 8-8-8z" />
      </symbol>
      <symbol id="icon-keyboard_arrow_left" viewBox="0 0 32 32">
        <title>keyboard_arrow_left</title>
        <path d="M20.563 21.438l-1.875 1.875-8-8 8-8 1.875 1.875-6.125 6.125z" />
      </symbol>
      <symbol id="icon-keyboard_arrow_right" viewBox="0 0 32 32">
        <title>keyboard_arrow_right</title>
        <path d="M11.438 21.813l6.125-6.125-6.125-6.125 1.875-1.875 8 8-8 8z" />
      </symbol>
      <symbol id="icon-keyboard_arrow_up" viewBox="0 0 32 32">
        <title>keyboard_arrow_up</title>
        <path d="M9.875 20.563l-1.875-1.875 8-8 8 8-1.875 1.875-6.125-6.125z" />
      </symbol>
      <symbol id="icon-remove" viewBox="0 0 32 32">
        <title>remove</title>
        <path d="M25.313 17.313h-18.625v-2.625h18.625v2.625z" />
      </symbol>
      <symbol id="icon-search" viewBox="0 0 32 32">
        <title>search</title>
        <path d="M13.066 18.38c2.934 0 5.314-2.38 5.314-5.314s-2.38-5.314-5.314-5.314-5.314 2.38-5.314 5.314 2.38 5.314 5.314 5.314zM20.151 18.38l5.867 5.867-1.771 1.771-5.867-5.867v-0.941l-0.332-0.332c-1.328 1.162-3.1 1.827-4.982 1.827-4.262 0-7.694-3.376-7.694-7.638s3.432-7.694 7.694-7.694 7.638 3.432 7.638 7.694c0 1.882-0.664 3.653-1.827 4.982l0.332 0.332h0.941z" />
      </symbol>
      <symbol id="icon-embed" viewBox="0 0 32 32">
        <title>embed</title>
        <path d="M18.865 21.104l5.156-5.104-5.156-5.104 1.563-1.563 6.667 6.667-6.667 6.667zM13.135 21.104l-1.563 1.563-6.667-6.667 6.667-6.667 1.563 1.563-5.156 5.104z" />
      </symbol>
      <symbol id="icon-image" viewBox="0 0 32 32">
        <title>image</title>
        <path d="M11.833 17.778l-4.111 5.333h16.556l-5.333-7.111-4.111 5.333zM26.667 24.278c0 1.278-1.111 2.389-2.389 2.389h-16.556c-1.278 0-2.389-1.111-2.389-2.389v-16.556c0-1.278 1.111-2.389 2.389-2.389h16.556c1.278 0 2.389 1.111 2.389 2.389v16.556z" />
      </symbol>
      <symbol id="icon-video" viewBox="0 0 32 32">
        <title>video</title>
        <path d="M20.722 14.833l-8.278 4.722v-9.5zM26.667 21.944v-14.222h-21.333v14.222h21.333zM26.667 5.333c1.278 0 2.389 1.056 2.389 2.389l-0.056 14.222c0 1.278-1.056 2.333-2.333 2.333h-5.944v2.389h-9.444v-2.389h-5.944c-1.333 0-2.389-1.056-2.389-2.333v-14.222c0-1.333 1.056-2.389 2.389-2.389h21.333z" />
      </symbol>
      <symbol id="icon-widget" viewBox="0 0 32 32">
        <title>widget</title>
        <path d="M1.641 24.974h28.718v3.59h-28.718zM5.231 17.795h3.59v5.385h-3.59zM10.615 10.615h3.59v12.564h-3.59zM16 16h3.59v7.18h-3.59zM21.385 5.231h3.59v17.949h-3.59z" />
      </symbol>
    </defs>
  </svg>
);

export default Icons;
