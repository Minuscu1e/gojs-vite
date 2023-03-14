<template>
  <div class="diagram" id="diagram" name="diagram"></div>
  <div class="overview" id="overview" name="overview"></div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import go, {DiagramInitOptions} from 'gojs'

onMounted(() => {
  init();
})


function init() {
  let diagram = new go.Diagram('diagram',
    {
      "initialContentAlignment": go.Spot.Center,
      // 设置为无限滚动
      "scrollMode": go.Diagram.InfiniteScroll,
      "allowZoom": true,
      "grid.visible": true,
      "allowDelete": false,
      "undoManager.isEnabled": true
    })
  // 创建预览地图
  let overview = new go.Overview("overview", {
    observed: diagram, contentAlignment: go.Spot.Center
  })
  overview.box.elt(0).stroke = "green";

  // 创建一个节点
  let node = new go.Node(go.Panel.Auto)
  let shape = new go.Shape({
    figure: "RoundedRectangle",
    fill: "lightblue"
  })
  node.add(shape)
  var text = new go.TextBlock(
    {text: "Hello", margin: 5}
  )
  node.add(text)

  diagram.add(node)
}

</script>

<style scoped>
.diagram {
  width: 100%;
  height: 100vh;
  background: aliceblue;
}

.overview {
  width: 200px;
  height: 200px;

  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;

}
</style>
