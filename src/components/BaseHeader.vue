<template>
    <nav class="mini-nav">
        <div class="nav-icon-btn active" title="Pokedex" data-media-type="banani-button">
            <div style="
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <iconify-icon icon="lucide:gamepad-2" style="font-size: 20px; color: inherit"></iconify-icon>
            </div>
        </div>
        <router-link to="/team" class="nav-icon-btn" title="Team" data-media-type="banani-button">
            <div style="
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <iconify-icon icon="lucide:users" style="font-size: 20px; color: inherit"></iconify-icon>
            </div>
        </router-link>
        <router-link to="/bag" class="nav-icon-btn" title="Bag" data-media-type="banani-button">
            <div style="
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <iconify-icon icon="lucide:backpack" style="font-size: 20px; color: inherit"></iconify-icon>
            </div>
        </router-link>
        <div style="flex: 1"></div>
        <router-link to="/settings" class="nav-icon-btn" title="Settings" style="margin-bottom: 24px" data-media-type="banani-button">
            <div style="
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <iconify-icon icon="lucide:settings" style="font-size: 20px; color: inherit"></iconify-icon>
            </div>
        </router-link>
    </nav>
</template>