<template>
    <transition name="animate">
        <div class="continue-wrapper">
            <svg class="circle" height="105" width="105">
                <circle cx="50" cy="50" r="48"></circle>
            </svg>
            <object class="arrow" data="../images/arrow.svg" type="image/svg+xml"></object>
        </div>
    </transition>
</template>

<style>
    .continue-wrapper {
        height: 120px;
        width: 100px;
        overflow: hidden;
        clip-path: inset(0px 0px 0px 0px);
        position: absolute;
        bottom: 10px;
        left: 20px;
    }
    .circle {
        transform: rotateX(72deg);
        position: absolute;
        top: 45px;
    }
    .circle circle {
        stroke-width: 4px;
        stroke: rgba(255,255,255,1.0);
        fill: rgba(255,255,255,0.0);
        transform-origin: center;
        
        animation-duration: 3s;
        animation-delay: 2s;
        animation-name: circle-drop;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    .arrow {
        position: absolute;
        transform-origin: bottom center;
        
        animation-duration: 3s;
        animation-delay: 2s;
        animation-name: arrow-drop;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    
    @keyframes arrow-drop{
        0% {
            top: -85px;
            transform: scale(1,1)
        }
        13% {
            transform: scale(0.99,1.01)
        }
        15% {
            top: 10px;
            
        }
        17% {
            transform: scale(1.1,0.9)
        }
        27% {
            transform: scale(1,1)
        }
        100% {
            top: 10px;
            transform: scale(1,1)
        }
    }
    @keyframes circle-drop{
        0% {
            fill: rgba(255,255,255,0.0);
            stroke: rgba(255,255,255,1.0);
        }
        15% {
            fill: rgba(255,255,255,0.0);
            stroke: rgba(255,255,255,1.0);
            animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        30% {
            fill: rgba(255,255,255,1.0);
            stroke: rgba(255,255,255,0.0);
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        50% {
            fill: rgba(255,255,255,0.7);
            stroke: rgba(255,255,255,1.0);
        }
        100% {
            fill: rgba(255,255,255,0.7);
        }
    }
</style>