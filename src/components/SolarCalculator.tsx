import { useState } from "react";
import { Calculator, Zap, Clock, Sun, IndianRupee, TrendingDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollAnimator from "./ScrollAnimator";

const SolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [result, setResult] = useState<null | {
    systemSize: number;
    monthlySavings: number;
    annualSavings: number;
    paybackYears: number;
    systemCost: number;
    co2Saved: number;
  }>(null);

  const calculate = () => {
    const monthlyBill = parseFloat(bill);
    if (!monthlyBill || monthlyBill < 500) return;

    const ratePerUnit = 8; // avg ₹/kWh
    const monthlyUnits = monthlyBill / ratePerUnit;
    const dailyUnits = monthlyUnits / 30;
    const systemSize = Math.ceil(dailyUnits / 4 * 10) / 10; // 4 units per kW per day avg
    const costPerKW = 55000; // after subsidy approx
    const systemCost = Math.round(systemSize * costPerKW);
    const monthlySavings = Math.round(monthlyBill * 0.85);
    const annualSavings = monthlySavings * 12;
    const paybackYears = Math.round((systemCost / annualSavings) * 10) / 10;
    const co2Saved = Math.round(monthlyUnits * 12 * 0.82 / 1000 * 10) / 10; // tons/year

    setResult({ systemSize, monthlySavings, annualSavings, paybackYears, systemCost, co2Saved });
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Solar Calculator</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 leading-tight">
            How Much Can <span className="gradient-text">You Save?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enter your monthly electricity bill and discover your potential savings with solar energy.
          </p>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Input side */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Calculate Your Savings</h3>
                      <p className="text-xs text-muted-foreground">Takes only 5 seconds</p>
                    </div>
                  </div>

                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Monthly Electricity Bill (₹)
                  </label>
                  <div className="relative mb-4">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="e.g. 3000"
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      className="pl-9 bg-secondary/50 border-border focus:border-primary h-12 text-lg"
                    />
                  </div>

                  <Button
                    onClick={calculate}
                    className="w-full animate-pulse-glow font-bold py-5 text-base group"
                  >
                    Calculate Savings
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-[10px] text-muted-foreground mt-3 text-center">
                    * Estimates based on average solar irradiance in UP. Actual savings may vary.
                  </p>
                </div>

                {/* Results side */}
                <div>
                  {result ? (
                    <div className="space-y-4 animate-fade-in">
                      <div className="glass rounded-xl p-4 border-primary/20">
                        <div className="flex items-center gap-3 mb-1">
                          <Sun className="w-5 h-5 text-primary" />
                          <span className="text-sm text-muted-foreground">Recommended System</span>
                        </div>
                        <div className="text-2xl font-extrabold text-foreground">{result.systemSize} kW</div>
                        <div className="text-xs text-muted-foreground">Estimated cost: ₹{result.systemCost.toLocaleString('en-IN')} (after subsidy)</div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass rounded-xl p-4">
                          <TrendingDown className="w-5 h-5 text-primary mb-2" />
                          <div className="text-lg font-bold text-primary">₹{result.monthlySavings.toLocaleString('en-IN')}</div>
                          <div className="text-[10px] text-muted-foreground">Monthly Savings</div>
                        </div>
                        <div className="glass rounded-xl p-4">
                          <Zap className="w-5 h-5 text-primary mb-2" />
                          <div className="text-lg font-bold text-foreground">₹{result.annualSavings.toLocaleString('en-IN')}</div>
                          <div className="text-[10px] text-muted-foreground">Annual Savings</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="glass rounded-xl p-4">
                          <Clock className="w-5 h-5 text-primary mb-2" />
                          <div className="text-lg font-bold text-foreground">{result.paybackYears} Years</div>
                          <div className="text-[10px] text-muted-foreground">Payback Period</div>
                        </div>
                        <div className="glass rounded-xl p-4">
                          <Sun className="w-5 h-5 text-primary mb-2" />
                          <div className="text-lg font-bold text-foreground">{result.co2Saved} Tons</div>
                          <div className="text-[10px] text-muted-foreground">CO₂ Saved/Year</div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 font-semibold">
                        Get Exact Quote — It's Free
                      </Button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center py-8">
                      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-float">
                        <Sun className="w-10 h-10 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">See Your Savings</h4>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        Enter your monthly electricity bill on the left to see how much you can save with solar panels.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
};

export default SolarCalculator;
