<template>
  <div><h1>标签管理</h1></div>
  <div class="table-container">
    <table class="data-table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row) in data" :key="row.id">
          <td v-for="(column, colIndex) in columns" :key="colIndex">
            {{ row[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  import {getBlockAddress,isOk,generateUuid,provider} from '../common/common'
  import {TaskTagProvider} from "../provider/apps/zuoyepigai/tasktag"
  import { create } from '@bufbuild/protobuf'
  import {
    ListTaskTagRequestBodySchema,
    TaskTagMetadataSchema
  } from '../yeying/api/apps/zuoyepigai/tasktag_pb'


  console.log(provider.proxy)
  const taskTagProvider = new TaskTagProvider(provider)
  const body = await taskTagProvider.list("1cad3b2d-b803-4e37-9c0b-2ff64ae2063d")
  console.log(body.list)
  let list = body.list

export default {
  props: {
    columns: {  // 列定义
      type: Array,
      default: () => [
        { label: 'did', field: 'did' },
        { label: 'name', field: 'name' },
        { label: 'uid', field: 'uid' },
        { label: 'createdAt', field: 'createdAt' },
        { label: 'updatedAt', field: 'updatedAt' },
        { label: 'isDeleted', field: 'isDeleted' }
      ]
    },
    data: {  // 表格数据
      type: Array,
      required: true,
      default: () => list
      
    }
  }
};
</script>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.data-table th,
.data-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.data-table th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}
</style>
  