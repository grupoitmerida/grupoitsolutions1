<template>
  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center" style="1px orange solid;">
        <b-col>
          <h3 class="mb-0">Servicios realizados</h3>
        </b-col>
        <b-col class="text-right">
          <a href="#!" class="btn btn-sm btn-primary">See all</a>
        </b-col>
      </b-row>
    </template>

    <el-table
      class="table-responsive table"
      :data="myservices"
      header-row-class-name="thead-light"
    >
      <el-table-column label="id servicio" min-width="90px" prop="idserv">
        <!-- <template v-slot="{row}">
          <div class="font-weight-600">{{row.page}}</div>
        </template> -->
      </el-table-column>
      <el-table-column label="Realizado" min-width="130px" prop="createdAt">
      </el-table-column>
      <el-table-column label="Cliente" min-width="70px" prop="client">
      </el-table-column>

      <el-table-column label="Vehículo" min-width="70px" prop="vehi">
        <!-- <template v-slot="{row}">
          {{row.bounceRate}}
        </template> -->
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "element-ui";
import axios from "axios";

const URL_GRUPO_IT = "http://localhost:3000/api";
const URL_API_PEG = "https://diesel.grupoitsur.com/api";
export default {
  name: "page-visits-table",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      myservices: [],
      tableData: [
        {
          page: "/argon/",
          visitors: "4,569",
          unique: "340",
          bounceRate: "46,53%",
        },
        {
          page: "/argon/index.html",
          visitors: "3,985",
          unique: "319",
          bounceRate: "46,53%",
        },
        {
          page: "/argon/charts.html",
          visitors: "3,513",
          unique: "294",
          bounceRate: "36,49%",
        },
        {
          page: "/argon/tables.html",
          visitors: "2,050",
          unique: "147",
          bounceRate: "50,87%",
        },
        {
          page: "/argon/profile.html",
          visitors: "1,795",
          unique: "190",
          bounceRate: "46,53%",
        },
      ],
    };
  },
  mounted() {
    
    //Servicios
    axios
      .get(URL_GRUPO_IT + "/services")
      .then((result) => {
        console.log("prueba: ", result);
        const auxServ = result.data.services;
        for (var i = 0; i < auxServ.length; i++) {
          this.myservices.push({
            idserv: auxServ[i].id,
            createdAt: auxServ[i].createdAt,
            client: auxServ[i].client,
            vehi: auxServ[i].vehicle,
            sn: auxServ[i].device.sn,
            imei: auxServ[i].device.imei,
            sim: auxServ[i].device.sim,
            nameserv: auxServ[i].device.name,
          });
        }
      })
      .catch((error) => {
        console.log("error axios: ", error);
        this.errored = true;
      });
    console.log("servicios filtrado: ", this.myservices);
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        return this.resources.filter((item) => {
          return this.searchQuery
            .toLowerCase()
            .split(" ")
            .every((v) => item.title.toLowerCase().includes(v));
        });
      } else {
        return this.resources;
      }
    },
  },
};
</script>
<style>
</style>
