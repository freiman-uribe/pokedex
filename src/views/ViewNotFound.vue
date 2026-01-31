<script setup lang="ts">
import Image404 from "../assets/images/error-404.jpg";
</script>

<template>
  <div class="export-wrapper">
    <div class="error-layout-wrapper">
      <div class="error-card">
        <div class="error-icon" data-media-type="banani-button">
          <div
            style="
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <iconify-icon
              icon="lucide:triangle-alert"
              style="font-size: 40px; color: var(--destructive)"
            ></iconify-icon>
          </div>
        </div>
        <div class="error-code">404</div>
        <div class="error-title">Página no encontrada</div>
        <div class="error-text">
          Parece que este Pokémon se ha salido de la Pokédex.<br />
          Revisa la URL o vuelve a la lista principal.
        </div>
        <div class="error-actions">
          <router-link
            to="/"
            class="error-primary"
            data-media-type="banani-button"
          >
            Volver a la Pokédex
          </router-link>
          <router-link
            to="/team"
            class="error-secondary"
            data-media-type="banani-button"
          >
            Ir a mi equipo
          </router-link>
        </div>
        <div class="error-illustration">
          <img
            data-aspect-ratio="16:9"
            data-query="cute pixel art style broken pokedex screen error 404, light background, yellow and blue accents"
            alt="404 Pixel Pokedex Error"
            :src="Image404"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.export-wrapper {
  margin: 0;
  padding: 0;
  background-color: var(--background);
  color: var(--foreground);
  display: flex;
  min-height: 812px;
  position: relative;
  font-family: var(--font-family-body);
}

.layout-wrapper {
  display: flex;
  width: 100%;
  min-height: 812px;
  flex: 1;
  overflow: hidden;
}

/* Mini Sidebar (reuse pixel style idea but simplified) */
.mini-nav {
  width: 64px;
  background: var(--card);
  border-right: 3px solid var(--foreground);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  gap: 24px;
  flex-shrink: 0;
}

.nav-icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  cursor: pointer;
  color: var(--muted-foreground);
}

.nav-icon-btn.active {
  background: var(--secondary);
  border-color: var(--foreground);
  color: var(--foreground);
}

/* Main Content */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  overflow: hidden;
}

.details-panel {
  width: 380px;
  background: var(--card);
  border-left: 3px solid var(--foreground);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow-y: auto;
}

.header-bar {
  padding: 24px 32px 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--background);
  border-bottom: 3px solid var(--foreground);
}

.header-top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.app-title {
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.team-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.meta-badge {
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  background: var(--card);
  border: 2px solid var(--foreground);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--foreground);
}

.header-bottom-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.team-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted-foreground);
}

.action-chip {
  padding: 6px 14px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--foreground);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--primary);
  color: var(--primary-foreground);
  cursor: pointer;
  box-shadow: 2px 2px 0 var(--foreground);
  white-space: nowrap;
}

.team-content-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px 32px 32px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.team-slot {
  background: var(--card);
  border: 3px solid var(--foreground);
  border-radius: var(--radius-xl);
  height: 180px;
  display: flex;
  overflow: hidden;
  cursor: pointer;
  position: relative;
}

.team-slot.selected {
  border-color: var(--primary);
  box-shadow: 4px 4px 0 var(--foreground);
}

.team-slot.empty {
  border-style: dashed;
  background: var(--background);
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  flex-direction: column;
  gap: 10px;
}

.slot-image {
  width: 150px;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-right: 3px solid var(--foreground);
}

.slot-image img {
  width: 110px;
  height: 110px;
  object-fit: contain;
  image-rendering: pixelated;
}

.slot-info {
  flex: 1;
  padding: 16px 16px 16px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
}

.slot-name-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
}

.slot-name {
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
}

.slot-level {
  font-size: 12px;
  font-weight: 700;
  color: var(--muted-foreground);
}

.slot-types {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.type-pill {
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  color: white;
}

.slot-tags-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
}

.role-pill {
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--foreground);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--muted);
  color: var(--foreground);
  white-space: nowrap;
}

.small-meta {
  font-size: 11px;
  color: var(--muted-foreground);
  white-space: nowrap;
}

.remove-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--background);
  border: 2px solid var(--foreground);
  color: var(--muted-foreground);
}

.panel-header {
  padding: 20px 20px 16px 20px;
  border-bottom: 3px solid var(--foreground);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--destructive);
  color: white;
}

.panel-title {
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
}

.panel-id {
  font-size: 14px;
  font-weight: 700;
  opacity: 0.85;
}

.active-image-area {
  height: 220px;
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid var(--foreground);
}

.active-image-area img {
  width: 180px;
  height: 180px;
  object-fit: contain;
  image-rendering: pixelated;
}

.details-tabs {
  display: flex;
  gap: 6px;
  padding: 10px 16px 10px 16px;
  border-bottom: 3px solid var(--foreground);
  background: var(--card);
}

.details-tab {
  padding: 6px 10px;
  border-radius: var(--radius-sm);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--muted-foreground);
  cursor: pointer;
  border: 2px solid transparent;
  background: transparent;
  white-space: nowrap;
}

.details-tab.active {
  background: var(--primary);
  color: var(--primary-foreground);
  border-color: var(--foreground);
}

.panel-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stats-block {
  background: var(--background);
  border-radius: var(--radius-md);
  border: 3px solid var(--foreground);
  padding: 14px;
}

.stats-title-row {
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.radar-container {
  display: flex;
  gap: 14px;
  align-items: center;
}

.radar-svg {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.radar-grid {
  fill: none;
  stroke: var(--muted-foreground);
  stroke-width: 1;
  opacity: 0.4;
}

.radar-fill {
  fill: var(--primary);
  opacity: 0.7;
  stroke: var(--foreground);
  stroke-width: 1;
}

.radar-axis {
  stroke: var(--muted-foreground);
  stroke-width: 1;
  opacity: 0.5;
}

.radar-legend {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
}

.radar-legend-row {
  display: flex;
  justify-content: space-between;
  gap: 6px;
  align-items: baseline;
}

.radar-label {
  font-weight: 700;
  color: var(--muted-foreground);
}

.radar-value {
  font-weight: 800;
  color: var(--foreground);
}

.roles-block {
  background: var(--card);
  border: 3px solid var(--foreground);
  padding: 12px;
  border-radius: var(--radius-md);
  font-size: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.roles-title {
  font-weight: 800;
  text-transform: uppercase;
}

.roles-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.roles-tag {
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--foreground);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--muted);
}

.move-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
}

.move-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background: var(--muted);
  border-radius: var(--radius-sm);
  font-weight: 600;
}

.t-grass {
  background: #9bcc50;
  color: #000;
}

.t-poison {
  background: #b97fc9;
  color: #fff;
}

.t-fire {
  background: #fd7d24;
  color: #fff;
}

.t-flying {
  background: #89aaff;
  color: #fff;
}

.t-ghost {
  background: #705898;
  color: #fff;
}

.t-steel {
  background: #b7b7ce;
  color: #111827;
}

.t-electric {
  background: #eed535;
  color: #111827;
}

.error-layout-wrapper {
  display: flex;
  width: 100%;
  min-height: 812px;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  background-color: var(--background);
  color: var(--foreground);
}

.error-card {
  max-width: 640px;
  width: 100%;
  background: var(--card);
  border-radius: var(--radius-xl);
  border: 3px solid var(--foreground);
  padding: 32px 32px 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 4px 4px 0 var(--foreground);
}

.error-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-md);
  border: 3px solid var(--foreground);
  background: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.error-code {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.error-title {
  font-size: 18px;
  font-weight: 700;
}

.error-text {
  font-size: 14px;
  color: var(--muted-foreground);
  line-height: 1.5;
}

.error-actions {
  display: flex;
  gap: 12px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.error-primary {
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--foreground);
  background: var(--primary);
  color: var(--primary-foreground);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  box-shadow: 2px 2px 0 var(--foreground);
  white-space: nowrap;
}

.error-secondary {
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--foreground);
  background: var(--card);
  color: var(--foreground);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
}

.error-illustration {
  margin-top: 12px;
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--muted);
  border: 2px solid var(--foreground);
}

.error-illustration img {
  width: 100%;
  display: block;
}
</style>
