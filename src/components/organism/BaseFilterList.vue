<script setup lang="ts">
import BaseInput from "../atoms/BaseInput.vue";
import BaseButton from "../atoms/BaseButton.vue";
</script>

<template>
  <header class="header-bar">
    <div class="search-row">
      <div
        style="
          width: 40px;
          height: 40px;
          background: var(--destructive);
          border: 3px solid var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 2px 2px 0px var(--foreground);
          color: white;
        "
      >
        <div
          style="
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
          "
        >
          <iconify-icon
            icon="lucide:search"
            style="font-size: 24px; color: white"
          ></iconify-icon>
        </div>
      </div>
      <base-input />
    </div>

    <div class="filter-scroll">
      <base-button buttonClass="filter-chip active"> All Gen </base-button>
      <base-button buttonClass="filter-chip"> Kanto </base-button>
      <base-button buttonClass="filter-chip"> Johto </base-button>
      <base-button buttonClass="filter-chip"> Hoenn </base-button>
      <base-button buttonClass="filter-chip"> Sinnoh </base-button>
      <base-button
        buttonClass="filter-chip"
        style="margin-left: 12px; border-left: 4px double var(--foreground)"
      >
        Grass
      </base-button>
      <base-button buttonClass="filter-chip"> Fire </base-button>
      <base-button buttonClass="filter-chip"> Water </base-button>
      <base-button buttonClass="filter-chip">Bug</base-button>
      <base-button buttonClass="filter-chip"> Electric </base-button>
    </div>
  </header>
</template>
