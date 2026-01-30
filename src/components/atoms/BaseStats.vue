<template>
    <div class="stats-block">
        <div style="
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
          ">
            <div style="display: flex; align-items: center; gap: 6px">
                <div style="
                width: 16px;
                height: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                    <iconify-icon icon="lucide:radar" style="font-size: 16px; color: black"></iconify-icon>
                </div>
                Base Stats (Radar)
            </div>
            <div style="
              display: flex;
              gap: 8px;
              font-size: 10px;
              color: var(--muted-foreground);
              font-weight: 700;
            ">
                <span>Physical</span>
                <span>Special</span>
            </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px">
            <!-- Radar chart using polygon (non-circular) -->
            <div style="
              width: 220px;
              height: 220px;
              margin: 0 auto;
              background: var(--muted);
              position: relative;
              border: 3px solid var(--foreground);
              box-shadow: 4px 4px 0px var(--muted-foreground);
            ">
                <svg viewBox="0 0 200 200" style="
                width: 100%;
                height: 100%;
                display: block;
                image-rendering: pixelated;
              ">
                    <!-- grid polygons -->
                    <polygon points="100,20 170,60 190,140 140,185 60,185 10,140 30,60" fill="none"
                        stroke="var(--muted-foreground)" stroke-width="1" opacity="0.4"></polygon>
                    <polygon points="100,40 155,70 172,132 135,167 65,167 28,132 45,70" fill="none"
                        stroke="var(--muted-foreground)" stroke-width="1" opacity="0.25"></polygon>
                    <polygon points="100,60 140,80 154,124 130,149 70,149 46,124 60,80" fill="none"
                        stroke="var(--muted-foreground)" stroke-width="1" opacity="0.18"></polygon>

                    <!-- stat polygon fill (radar shape) -->
                    <polygon points="100,55 148,78 160,130 128,155 72,150 45,120 60,80" fill="var(--primary)"
                        stroke="var(--foreground)" stroke-width="1.5" opacity="0.7"></polygon>

                    <!-- axes -->
                    <line x1="100" y1="20" x2="100" y2="185" stroke="var(--muted-foreground)" stroke-width="1"
                        opacity="0.5"></line>
                    <line x1="30" y1="60" x2="170" y2="60" stroke="var(--muted-foreground)" stroke-width="1"
                        opacity="0.5"></line>
                    <line x1="10" y1="140" x2="190" y2="140" stroke="var(--muted-foreground)" stroke-width="1"
                        opacity="0.5"></line>
                </svg>
            </div>

            <!-- Labels below chart -->
            <div style="
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 6px 8px;
              font-size: 11px;
              color: var(--muted-foreground);
            ">
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">HP</span>
                    <span style="font-weight: 800; color: var(--foreground)">45</span>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">ATK</span>
                    <span style="font-weight: 800; color: var(--foreground)">49</span>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">DEF</span>
                    <span style="font-weight: 800; color: var(--foreground)">49</span>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">SpA</span>
                    <span style="font-weight: 800; color: var(--foreground)">65</span>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">SpD</span>
                    <span style="font-weight: 800; color: var(--foreground)">65</span>
                </div>
                <div style="display: flex; justify-content: space-between; gap: 4px">
                    <span style="font-weight: 700">SPE</span>
                    <span style="font-weight: 800; color: var(--foreground)">45</span>
                </div>
            </div>
        </div>
    </div>
</template>