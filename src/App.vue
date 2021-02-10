<template>
  <div id="app">
    <b-navbar toggleable="lg" type="primary" variant="light">
      <b-navbar-brand href="#">DNA Prettifier</b-navbar-brand>
    </b-navbar>
    <div class="nmsWallpaper mb-5" :class="[$bindParallax]" />
    <div class="container-fluid">
      <p>
        Use this tool to prettify DNA, convert DNA to RNAm and remove spaces
        from it!
      </p>
      <h3 class="text-dark d-block mb-4">Input data</h3>
      <textarea
        v-model="inputData"
        class="form-control w-100 mb-3 dna-box"
        rows="10"
      ></textarea>
      <form @submit.stop.prevent="prettify" class="mb-3">
        <div class="row">
          <div class="col-sm-4">
            <span class="d-block mb-2">Total number of rows per columns:</span>
            <input
              type="textbox"
              class="form-control"
              v-model="form.totalRows"
            />
          </div>
          <div class="col-sm-4">
            <span class="d-block mb-2">Total cell length:</span>
            <input
              type="textbox"
              class="form-control"
              v-model="form.cellLength"
            />
          </div>
          <div class="col-sm-4 d-flex justify-content-center align-items-end">
            <button class="btn btn-primary btn-block" type="submit">
              Prettify!
            </button>
          </div>
        </div>
      </form>
      <div class="d-block mb-4"></div>
      <h3 class="text-dark d-block mb-4">Prettified output</h3>
      <textarea
        v-model="prettifiedOutput"
        class="form-control w-100 mb-3 dna-box"
        rows="10"
      ></textarea>
      <div class="text-right">
        <button
          class="btn btn-danger mr-3"
          @click="dnaToRna"
          :disabled="!prettifiedOutput || !prettifiedOutput.length"
        >
          {{ form.isRna ? "RNAm to DNA" : "DNA to RNAm" }}
        </button>
        <button
          class="btn btn-success mr-3"
          @click="downloadCsv"
          :disabled="!$canCsv || !prettifiedOutput || !prettifiedOutput.length"
        >
          Download CSV
        </button>
        <button
          class="btn btn-dark"
          @click="downloadTxt"
          :disabled="!prettifiedOutput || !prettifiedOutput.length"
        >
          Download TXT
        </button>
      </div>
      <div class="mb-5 d-block w-100 mb-3"></div>
      <span class="text-primary mb-3 d-block">Disclaimer</span>
      <small class="text-muted d-block mb-3">
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </small>
    </div>
    <div
      class="w-100 text-dark d-block text-center border-top"
      style="padding: 1rem"
    >
      <img
        src="https://avatars2.githubusercontent.com/u/520683?s=460&u=4c84240f1443770a9df9096cf2965862a2a2f279&v=4"
        style="max-height: 60px"
        class="rounded-circle mr-3"
      />
      <span
        >Developed with ❤️ by Brayan Iribe.
        <a href="https://github.com/BrayanIribe">Visit me on GitHub!</a></span
      >
    </div>
  </div>
</template>

<script>
import SimpleCSV from "./csv";
import download from "downloadjs";

export default {
  name: "App",
  components: {},
  data() {
    return {
      bottom: false,
      english: true,
      inputData: "",
      prettifiedOutput: "",
      form: {
        cellLength: 10,
        totalRows: 5,
        isRna: false,
      },
    };
  },
  computed: {
    $bindParallax() {
      return this.bottom ? "bottom" : "";
    },
    $canCsv() {
      return this.form.cellLength > 0 && this.form.totalRows > 0;
    },
  },
  methods: {
    dnaToRna() {
      if (this.form.isRna)
        this.prettifiedOutput = this.prettifiedOutput
          .replace(/[U]/g, "T")
          .trim();
      else
        this.prettifiedOutput = this.prettifiedOutput
          .replace(/[T]/g, "U")
          .trim();

      this.form.isRna = !this.form.isRna;
    },
    downloadCsv() {
      if (!this.$canCsv) return;

      const rows = this.prettifiedOutput.replaceAll("  ", " ").split("\n");
      const header = rows[0].split(" ");
      for (let i = 0; i < header.length; i++) {
        header[i] = `Column ${i + 1}`;
      }

      header[header.length - 1] = `Total nucleotide`;

      const csv = new SimpleCSV({ header });
      for (const row of rows) {
        const cells = row.split(" ");
        csv.push(cells);
      }

      download(csv.generate(), `dna-${new Date().getTime()}-format.csv`);
    },
    downloadTxt() {
      const { prettifiedOutput } = this;
      if (!prettifiedOutput || !prettifiedOutput.length) {
        alert("Error: No data to download!");
        return;
      }

      const format = this.$canCsv ? "format" : "nf";

      download(prettifiedOutput, `dna-${new Date().getTime()}-${format}.txt`);
    },
    prettify() {
      const rows = this.inputData
        .toUpperCase()
        .replace(/[^A-Za-z]/g, "")
        .trim();
      const cell_length = this.form.cellLength;
      const cells_per_row = this.form.totalRows;
      const total_cells = Math.round(rows.length / cell_length);
      this.form.isRna = this.inputData.includes("U");
      if (cell_length <= 0 || cells_per_row <= 0) {
        this.prettifiedOutput = rows;
        return;
      }
      const buff = [];
      let i = 0;
      let totalNucleotides = 0;
      let totalRows = 0;
      let idx = 0;
      for (; i < total_cells; i++) {
        if (i % cells_per_row === 0 && i > 0) {
          buff.push(` ${totalNucleotides}\n`);
          totalRows++;
          idx = 0;
        }
        let cell = rows.substr(i * cell_length, cell_length);
        totalNucleotides += cell.length;
        if (cell.length < cell_length)
          cell += " ".repeat(cell_length - cell.length);

        buff.push(cell);
        idx++;
      }

      const leading_cells = cells_per_row - idx - 1;
      console.log({
        idx,
        total_cells,
        totalRows,
        cells_per_row,
        leading_cells,
      });
      if (leading_cells > 0) {
        for (let c = 0; c <= leading_cells + 1; c++) {
          if (c === leading_cells + 1) {
            buff.push(` ${totalNucleotides}`);
            break;
          }
          buff.push(`${" ".repeat(cell_length)}`);
        }
      }
      this.prettifiedOutput = buff
        .join(" ")
        .split("\n")
        .map((e, i) => {
          if (i > 0) e = e.substr(1);
          return e;
        })
        .join("\n");
    },
  },
  created() {
    document.title = "DNA Prettifier";
    setTimeout(() => {
      this.bottom = true;
    }, 100);
  },
};
</script>

<style>
.nmsWallpaper {
  width: 100%;
  height: 20rem;
  background-image: url("https://cdn.wallpapersafari.com/13/68/pqnscG.jpg");
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position-y 5s ease;
}

.nmsWallpaper.bottom {
  background-position-y: bottom;
}

html,
body {
  margin-bottom: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

.dna-box {
  font-family: "Courier New";
  font-size: 1rem;
  font-weight: bold;
  word-wrap: break-word;
  resize: none;
}
</style>
