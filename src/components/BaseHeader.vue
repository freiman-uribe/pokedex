<template>
    <nav class="mini-nav">
        <router-link to="/" active-class="active" class="nav-icon-btn" title="Pokedex" data-media-type="banani-button">
            <div style="
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <iconify-icon icon="lucide:gamepad-2" style="font-size: 20px; color: inherit"></iconify-icon>
            </div>
        </router-link>
        <router-link to="/team" active-class="active" class="nav-icon-btn" title="Team" data-media-type="banani-button">
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
        <router-link to="/bag" active-class="active" class="nav-icon-btn" title="Bag" data-media-type="banani-button">
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
        <router-link to="/settings" active-class="active" class="nav-icon-btn" title="Settings" style="margin-bottom: 24px" data-media-type="banani-button">
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