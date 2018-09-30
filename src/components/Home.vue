<template>
  <div>
    <h1 class="title">
      <img src="@/assets/logo.svg" alt="logo" class="logo">
      Appraisal Calculator
    </h1>
    <br>
    <div class="grid-row">
      <div class="grid-col">
        <div class="title2">Current Salary Structure</div>
        <br>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">Current Fixed</div>
          </div>
          <div class="grid-col">
            <input type="number" class="in-txt" v-model.number="current.ctc">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">Current Variable (if any)</div>
          </div>
          <div class="grid-col">
            <input type="number" class="in-txt" v-model.number="current.var">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">Annual Bonus (if any)</div>
          </div>
          <div class="grid-col">
            <input type="number" class="in-txt" v-model.number="current.bonus">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Sum Total (CTC)</div>
          </div>
          <div class="grid-col">
            ₹{{currentSum || 0}}
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Var Percentage to Fixed</div>
          </div>
          <div class="grid-col">
            {{currentCtcVarPercentage || 0}}%
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Monthly Pay (CTC)</div>
          </div>
          <div class="grid-col">
            ₹{{current.ctc/12 || 0}}
          </div>
        </div>

      </div>

      <!-- ================ New Salary =========== -->

      <div class="grid-col">
        <div class="title2">New Salary Structure</div>
        <br>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">New Fixed</div>
          </div>
          <div class="grid-col">
            <input type="text" class="in-txt" v-model.number="newSal.ctc">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">New Variable (if any)</div>
          </div>
          <div class="grid-col">
            <input type="text" class="in-txt" v-model.number="newSal.var">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label">Annual Bonus (if any)</div>
          </div>
          <div class="grid-col">
            <input type="text" class="in-txt" v-model.number="newSal.bonus">
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Sum Total (CTC)</div>
          </div>
          <div class="grid-col">
            ₹{{newSum}}
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Var Percentage to Fixed</div>
          </div>
          <div class="grid-col">
            {{newCtcVarPercentage || 0}}%
          </div>
        </div>

        <div class="grid-row2">
          <div class="grid-col">
            <div class="form-label bold">Monthly Pay (CTC)</div>
          </div>
          <div class="grid-col">
            ₹{{newSal.ctc/12 || 0}}
          </div>
        </div>

      </div>
    </div>

    <hr>

    <div class="grid-row3">
      <div class="grid-col grid-a light">Percentage Change (CTC)</div>
      <div class="grid-col grid-b">{{ctcTotalPercentage || 0}}%</div>
    </div>
    
    <div class="grid-row3">
      <div class="grid-col grid-a light">Percentage Change (Variable)</div>
      <div class="grid-col grid-b">{{varTotalPercentage || 0}}%</div>
    </div>
    
    <div class="grid-row3">
      <div class="grid-col grid-a bold">Total Percentage Change</div>
      <div class="grid-col grid-b">{{overallPercentage || 0}}%</div>
    </div>

    <div class="fixedline"></div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        current: {
          ctc: 0,
          var: 0,
          bonus: 0,
        },
        newSal: {
          ctc: 0,
          var: 0,
          bonus: 0,
        },
      };
    },
    computed: {
      currentSum() {
        return this.current.ctc + this.current.var + this.current.bonus;
      },
      newSum() {
        return this.newSal.ctc + this.newSal.var + this.newSal.bonus;
      },
      currentCtcVarPercentage() {
        if (this.current.var) {
          return ((this.current.var / this.current.ctc) * 100).toFixed(2);
        }
        return 0;
      },
      newCtcVarPercentage() {
        if (this.current.var) {
          return ((this.newSal.var / this.newSal.ctc) * 100).toFixed(2);
        }
        return 0;
      },
      ctcTotalPercentage() {
        if (this.current.ctc && this.newSal.ctc) {
          return (((this.newSal.ctc - this.current.ctc) / this.current.ctc) * 100).toFixed(2);
        }
        return 0;
      },
      varTotalPercentage() {
        if (this.current.var && this.newSal.var) {
          return (((this.newSal.var - this.current.var) / this.current.var) * 100).toFixed(2);
        }
        return 0;
      },
      overallPercentage() {
        if (this.currentSum && this.newSum) {
          return (((this.newSum - this.currentSum) / this.currentSum) * 100).toFixed(2);
        }
        return 0;
      },
    },
    mounted() {
      console.log('mounted again');
    },
    methods: {},
  };
</script>

<style lang="scss">
  @import './styles/home.scss';
</style>
