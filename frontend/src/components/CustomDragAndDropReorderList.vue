<template>
    <!-- Custom Drag-and-Drop List -->
    <div v-if="itemsD.length > 0" class="w-full">
        <div v-for="(item, index) in itemsD" :key="index" class="flex justify-between items-center mb-3 draggable-item"
            draggable="true" @dragstart="handleDragStart(index)" @dragover.prevent @drop="handleDrop(index)">
            <div class="flex items-center">
                <!-- Drag Handle -->
                <q-icon name="drag_indicator" class="drag-handle q-mr-sm" />
                <div>
                    <div>{{ item.linkType }}</div>
                    <div class="text-sm text-grey">{{ item.link }}</div>
                </div>
            </div>

            <!-- <div class="text-right">
                  <q-btn icon="edit" size="sm" color="green" dense @click="() => editLink(index)"></q-btn>
                  <q-btn class="ml-1" icon="delete" size="sm" color="red" dense
                    @click="() => removeLink(index)"></q-btn>
                </div> -->
        </div>
    </div>
</template>
<script setup>
import {ref }from 'vue'
const itemsD = ref([
    {
        link: 'item1 Link',
        linkType: 'item1 Link Type'
    },
    {
        link: 'item2 Link',
        linkType: 'item2 Link Type'
    },
    {
        link: 'item3 Link',
        linkType: 'item3 Link Type'
    },
]);
let draggedItemIndex = null; // To track the index of the dragged item

// Handle the drag start event
const handleDragStart = (index) => {
    draggedItemIndex = index;
};

// Handle the drop event
const handleDrop = (dropIndex) => {
    if (draggedItemIndex !== null) {
        const draggedItem = itemsD.value[draggedItemIndex];
        itemsD.value.splice(draggedItemIndex, 1); // Remove the item from the original position
        itemsD.value.splice(dropIndex, 0, draggedItem); // Insert the item at the new position
        draggedItemIndex = null; // Reset the dragged item index
    }
};

</script>

<style scoped>
.drag-handle {
    cursor: grab;
}

.draggable-item {
    border: 1px solid #ccc;
    padding: 8px;
    border-radius: 4px;
    background-color: #f9f9f9;
    margin-bottom: 5px;
}

.draggable-item:hover {
    background-color: #ececec;
}
</style>