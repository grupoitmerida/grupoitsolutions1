<template>
  <card>
    <b-row align-h="between" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Nuevo servicio</h3>
      </b-col>
      <b-col cols="1" class="text-right">
        <a href="#" class="btn-circle btn-primary" @click="funcMostrar"
          ><i :class="plus"></i
        ></a>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile" v-if="mostrar">
      <h6 class="heading-small text-muted mb-4">Information del vehículo</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Nombre"
              placeholder="Nombre o ID como aparece en Pegasus"
              v-model="user.username"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="email"
              label="Marca"
              placeholder="Marca del vehículo"
              v-model="user.email"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Modelo"
              placeholder="Modelo del vehículo"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Placa"
              placeholder="Placa del vehículo"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input
              type="text"
              label="Kilometraje"
              placeholder="Kilometraje como lo marca en el tablero"
              v-model="user.firstName"
            >
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input
              type="text"
              label="Batería"
              placeholder="Voltaje de la batería del vehículo"
              v-model="user.lastName"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4" />

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Información del dispositivo</h6>

      <div class="pl-lg-4">
        <!-- <b-row>
          <b-col md="12">
            <base-input
              type="text"
              label="IMEI"
              placeholder="IMEI del dispositivo"
              v-model="user.address"
            >
            </base-input>
          </b-col>
        </b-row> -->
        <b-row>
          <b-col lg="4">
            <base-input
              type="text"
              label=" IMEI"
              placeholder="IMEI del dispositivo"
              v-model="user.city"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              type="text"
              label="Serie"
              placeholder="Serie del dispositivo"
              v-model="user.country"
            >
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input
              label="SIM"
              placeholder="SIM CARD del dispositivo"
              v-model="user.postalCode"
            >
            </base-input>
          </b-col>
        </b-row>
      </div>
      <!--********************************************************************************************************** -->
      <hr class="my-4" />
      <h6 class="heading-small text-muted mb-4">
        Accesorios para el dispositivo
      </h6>
      <div class="pl-lg-4">
        <b-row>
          <b-col lg="4">
            <!------------------------------------------>
            <div>
              <base-input
                label="Accesorio"
                placeholder="Search"
                list="my-list-id"
              >
              </base-input>
              <datalist id="my-list-id">
                >
                <option>Manual Option</option>
                <option v-for="size in accesorios" :key="size">
                  {{ size }}
                </option>
              </datalist>
            </div>
            <!------------------------------------------->
          </b-col>
        </b-row>
      </div>
      <!--"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""" -->
      <hr class="my-4" />
      <h6 class="heading-small text-muted mb-4">Datos del servicio</h6>
      <div class="pl-lg-4">
        <b-row md="12">
          <b-col>
            <!------------------------------------------>
            <div>
              <base-input label="Tipo" placeholder="Search" list="my-list-serv">
              </base-input>
              <datalist id="my-list-serv">
                >
                <option>Manual Option</option>
                <option v-for="item in servicios" :key="item">
                  {{ item }}
                </option>
              </datalist>
            </div>
            <!------------------------------------------->
          </b-col>
        </b-row>
      </div>
      <!--********************************************************************************************************** -->
      <hr class="my-4" />
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Información del cliente</h6>
      <div class="pl-lg-4">
        <b-form-group
          label=""
          label-class="form-control-label"
          class="mb-0"
          label-for="about-form-textaria"
        >
          <b-row>
            <b-col md="12">
              <base-input
                type="text"
                label="Nombre y cargo"
                placeholder="Nombre y cargo quien recibió la unidad"
                v-model="user.address"
              >
              </base-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <base-input
                type="text"
                label="Lugar de instalación"
                placeholder="Lugar de instalación"
                v-model="user.address"
              >
              </base-input>
            </b-col>
          </b-row>
          <b-container v-if="mostrarFirma">
            <div>
              <b-button id="show-btn" @click="showModal">Open Modal</b-button>
              <b-button id="toggle-btn" @click="toggleModal"
                >Toggle Modal</b-button
              >
              <b-modal
                ref="my-modal"
                hide-footer
                title="Using Component Methods"
              >
                <div class="d-block text-center">
                  <h3>Hello From My Modal!</h3>
                </div>
                <!---->
                <div class="row">
                  <div class="col-md-12">
                    <canvas id="draw-canvas" width="auto" height="360">
                      No tienes un buen navegador.
                    </canvas>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input
                      type="button"
                      class="button"
                      id="draw-submitBtn"
                      value="Crear Imagen"
                    />
                    <input
                      type="button"
                      class="button"
                      id="draw-clearBtn"
                      value="Borrar Canvas"
                    />
                    <!-- <label>Color</label>
                    <input type="color" id="color" />
                    <label>Tamaño Puntero</label>
                    <input
                      type="range"
                      id="puntero"
                      min="1"
                      default="1"
                      max="5"
                      width="10%"
                    /> -->
                  </div>
                </div>
                <!---->
                <button
                  class="mt-1"
                  @click="funcMostrarFirm"
                  variant="outline-primary"
                >
                  Agregar Firma
                </button>
                <b-button
                  class="mt-3"
                  variant="outline-danger"
                  block
                  @click="hideModal"
                  >Close Me</b-button
                >
                <b-button
                  class="mt-2"
                  variant="outline-warning"
                  block
                  @click="toggleModal"
                  >Toggle Me</b-button
                >
              </b-modal>
            </div>
            <!------------------------------------------------------------>
            <div class="contenedor">
                <!-- <br />
                <div class="row">
                  <div class="col-md-12">
                    <textarea id="draw-dataUrl" class="form-control" rows="5">
                    Para los que saben que es esto:</textarea
                    >
                  </div>
                </div> -->
              <br />
              <!-- <div class="contenedor"> -->
                <div>
                <div class="col-md-12">
                  <img id="draw-image" src="" alt="" />
                  <!-- <img id="draw-image" src="" alt="Imagen aparecera Aqui!" /> -->
                </div>
              </div>
            </div>
            <!------------------------------------------------------------>
          </b-container>
          <!-- <b-form-textarea
            rows="4"
            v-model="user.aboutMe"
            id="about-form-textaria"
            placeholder="A few words about you ..."
          ></b-form-textarea> -->
        </b-form-group>
      </div>
    </b-form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      mostrar: false,
      plus: "ni ni-fat-add",
      delet: "ni ni-fat-delete",
      mostrarFirma: true,
      user: {
        company: "Creative Code Inc.",
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        postalCode: "",
        aboutMe: "Firma en este campo",
      },
      accesorios: [
        "Ecu Monitor",
        "Lector ibutton",
        "TPMS Continental",
        "Cámara serial",
      ],
      selected: "",
      servicios: [
        "Instalación",
        "des instalación",
        "re instalación",
        "visita técnica",
        "cambio",
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {
    console.log("array: ", this.servicios);
    /*---------------------------------------------------------------*/
    // recuperado de: http://w3.unpocodetodo.info/lab/dibujar-a-mano-alzada.php
    //https://programadorwebvalencia.com/dibujar-con-el-raton-en-HTML-y-Javascript/

    /*---------------------------------------------------------------*/
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    /**
     *
     */
    updateProfile() {
      console.log("prueba log");
      alert("Your data: " + JSON.stringify(this.user));
    },
    //AGREFAR MEJOR LA FUNCION TOGGLE() PARA MOSTRAR Y OCULTAR
    funcMostrar() {
      if (this.mostrar) {
        this.plus = "ni ni-fat-add";
        console.log("mostrar");
        this.mostrar = false;
      } else {
        console.log("no mostrar");
        this.mostrar = true;
        this.plus = this.delet;
      }
    },
    funcMostrarFirm() {
      this.mostrarFirma = true;
      (function () {
        // Comenzamos una funcion auto-ejecutable

        // Obtenenemos un intervalo regular(Tiempo) en la pamtalla
        window.requestAnimFrame = (function (callback) {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimaitonFrame ||
            function (callback) {
              window.setTimeout(callback, 1000 / 60);
              // Retrasa la ejecucion de la funcion para mejorar la experiencia
            }
          );
        })();

        // Traemos el canvas mediante el id del elemento html
        var canvas = document.getElementById("draw-canvas");
        var ctx = canvas.getContext("2d");

        // Mandamos llamar a los Elemetos interactivos de la Interfaz HTML
        var drawText = document.getElementById("draw-dataUrl");
        var drawImage = document.getElementById("draw-image");
        var clearBtn = document.getElementById("draw-clearBtn");
        var submitBtn = document.getElementById("draw-submitBtn");
        clearBtn.addEventListener(
          "click",
          function (e) {
            // Definimos que pasa cuando el boton draw-clearBtn es pulsado
            clearCanvas();
            drawImage.setAttribute("src", "");
          },
          false
        );
        // Definimos que pasa cuando el boton draw-submitBtn es pulsado
        submitBtn.addEventListener(
          "click",
          function (e) {
            var dataUrl = canvas.toDataURL();
            // drawText.innerHTML = dataUrl;
            console.log('Img convert base64: ', dataUrl);
            drawImage.setAttribute("src", dataUrl);
          },
          false
        );

        // Activamos MouseEvent para nuestra pagina
        var drawing = false;
        var mousePos = { x: 0, y: 0 };
        var lastPos = mousePos;
        canvas.addEventListener(
          "mousedown",
          function (e) {
            /*
      Mas alla de solo llamar a una funcion, usamos function (e){...}
      para mas versatilidad cuando ocurre un evento
    */
            // var tint = document.getElementById("color");
            // var punta = document.getElementById("puntero");
            console.log(e);
            drawing = true;
            lastPos = getMousePos(canvas, e);
          },
          false
        );
        canvas.addEventListener(
          "mouseup",
          function (e) {
            drawing = false;
          },
          false
        );
        canvas.addEventListener(
          "mousemove",
          function (e) {
            mousePos = getMousePos(canvas, e);
          },
          false
        );

        // Activamos touchEvent para nuestra pagina
        canvas.addEventListener(
          "touchstart",
          function (e) {
            mousePos = getTouchPos(canvas, e);
            console.log(mousePos);
            e.preventDefault(); // Prevent scrolling when touching the canvas
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousedown", {
              clientX: touch.clientX,
              clientY: touch.clientY,
            });
            canvas.dispatchEvent(mouseEvent);
          },
          false
        );
        canvas.addEventListener(
          "touchend",
          function (e) {
            e.preventDefault(); // Prevent scrolling when touching the canvas
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent);
          },
          false
        );
        canvas.addEventListener(
          "touchleave",
          function (e) {
            // Realiza el mismo proceso que touchend en caso de que el dedo se deslice fuera del canvas
            e.preventDefault(); // Prevent scrolling when touching the canvas
            var mouseEvent = new MouseEvent("mouseup", {});
            canvas.dispatchEvent(mouseEvent);
          },
          false
        );
        canvas.addEventListener(
          "touchmove",
          function (e) {
            e.preventDefault(); // Prevent scrolling when touching the canvas
            var touch = e.touches[0];
            var mouseEvent = new MouseEvent("mousemove", {
              clientX: touch.clientX,
              clientY: touch.clientY,
            });
            canvas.dispatchEvent(mouseEvent);
          },
          false
        );

        // Get the position of the mouse relative to the canvas
        function getMousePos(canvasDom, mouseEvent) {
          var rect = canvasDom.getBoundingClientRect();
          /*
      Devuelve el tamaño de un elemento y su posición relativa respecto
      a la ventana de visualización (viewport).
    */
          return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top,
          };
        }

        // Get the position of a touch relative to the canvas
        function getTouchPos(canvasDom, touchEvent) {
          var rect = canvasDom.getBoundingClientRect();
          console.log(touchEvent);
          /*
      Devuelve el tamaño de un elemento y su posición relativa respecto
      a la ventana de visualización (viewport).
    */
          return {
            x: touchEvent.touches[0].clientX - rect.left, // Popiedad de todo evento Touch
            y: touchEvent.touches[0].clientY - rect.top,
          };
        }

        // Draw to the canvas
        function renderCanvas() {
          if (drawing) {
            // var tint = document.getElementById("color");
            // var punta = document.getElementById("puntero");
            //ctx.strokeStyle = tint.value;
            ctx.strokeStyle = '#333';
            ctx.beginPath();
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            // console.log(punta.value);
            // ctx.lineWidth = punta.value;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
            lastPos = mousePos;
          }
        }

        function clearCanvas() {
          canvas.width = canvas.width;
        }

        // Allow for animation
        (function drawLoop() {
          requestAnimFrame(drawLoop);
          renderCanvas();
        })();
      })();
    },
  },
};
</script>
<style lang="scss">
$body-bg: #eee;
$canvas-bg: #fff;
$font1: Arial, sans-serif;

body {
  background-color: $body-bg;
  font-family: $font1;
}

p {
  text-align: center;
  cursor: pointer;
}
.btn-circle {
  border: none;
  font-size: 1.5em;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/* -------------------------------------------------------- */
#draw-canvas {
  border: 2px dotted #cccccc;
  border-radius: 5px;
  cursor: crosshair;
}

#draw-dataUrl {
  width: 100%;
}
.contenedor {
  border:1px solid #777;
  width: 100%;
  // margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
// label {
//   margin: 0 15px;
// }

// input[type="range"] {
//   -webkit-appearance: none;
//   margin: 18px 0;
// }
// input[type="range"]:focus {
//   outline: none;
// }
// input[type="range"]::-webkit-slider-runnable-track {
//   width: 100%;
//   height: 8.4px;
//   cursor: pointer;
//   animate: 0.2s;
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//   background: #3071a9;
//   border-radius: 1.3px;
//   border: 0.2px solid #010101;
// }
// input[type="range"]::-webkit-slider-thumb {
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//   border: 1px solid #000000;
//   height: 36px;
//   width: 16px;
//   border-radius: 3px;
//   background: #ffffff;
//   cursor: pointer;
//   -webkit-appearance: none;
//   margin-top: -14px;
// }
// input[type="range"]:focus::-webkit-slider-runnable-track {
//   background: #367ebd;
// }
// input[type="range"]::-moz-range-track {
//   width: 100%;
//   height: 8.4px;
//   cursor: pointer;
//   animate: 0.2s;
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//   background: #3071a9;
//   border-radius: 1.3px;
//   border: 0.2px solid #010101;
// }
// input[type="range"]::-moz-range-thumb {
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//   border: 1px solid #000000;
//   height: 36px;
//   width: 16px;
//   border-radius: 3px;
//   background: #ffffff;
//   cursor: pointer;
// }
// input[type="range"]::-ms-track {
//   width: 100%;
//   height: 8.4px;
//   cursor: pointer;
//   animate: 0.2s;
//   background: transparent;
//   border-color: transparent;
//   border-width: 16px 0;
//   color: transparent;
// }
// input[type="range"]::-ms-fill-lower {
//   background: #2a6495;
//   border: 0.2px solid #010101;
//   border-radius: 2.6px;
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
// }
// input[type="range"]::-ms-fill-upper {
//   background: #3071a9;
//   border: 0.2px solid #010101;
//   border-radius: 2.6px;
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
// }
// input[type="range"]::-ms-thumb {
//   box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
//   border: 1px solid #000000;
//   height: 36px;
//   width: 16px;
//   border-radius: 3px;
//   background: #ffffff;
//   cursor: pointer;
// }
// input[type="range"]:focus::-ms-fill-lower {
//   background: #3071a9;
// }
// input[type="range"]:focus::-ms-fill-upper {
//   background: #367ebd;
// }
/* --------------------------------------------------------- */
</style>