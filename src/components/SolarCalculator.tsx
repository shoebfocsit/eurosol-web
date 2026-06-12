import { useState } from "react";
import { Calculator, Zap, Clock, Sun, IndianRupee, TrendingDown, ArrowRight, BadgeIndianRupee, Landmark, AlertTriangle, Building2, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollAnimator from "./ScrollAnimator";

type SystemType = "residential" | "commercial";

const SolarCalculator = () => {
  const [bill, setBill] = useState("");
  const [error, setError] = useState("");
  const [systemType, setSystemType] = useState<SystemType>("residential");
  const [includeSubsidy, setIncludeSubsidy] = useState(true);
  const [result, setResult] = useState<null | {
    systemSize: number;
    monthlySavings: number;
    annualSavings: number;
    paybackYears: number;
    systemCostWithSubsidy: number;
    systemCostWithoutSubsidy: number;
    co2Saved: number;
    subsidyAmount: number;
    category: string;
    systemType: SystemType;
  }>(null);

  const calculate = () => {
    const monthlyBill = parseFloat(bill);
    if (!bill.trim()) { setError("Please enter your monthly bill"); return; }
    if (isNaN(monthlyBill)) { setError("Enter a valid number"); return; }
    if (monthlyBill < 500) { setError("Minimum bill should be ₹500"); return; }
    if (monthlyBill > 500000) { setError("Maximum bill should be ₹5,00,000"); return; }
    setError("");

    const ratePerUnit = systemType === "residential" ? 8 : 10;
    const monthlyUnits = monthlyBill / ratePerUnit;
    const dailyUnits = monthlyUnits / 30;
    const rawSize = dailyUnits / 4;

    // System size tiers based on bill and type
    let systemSize: number;
    let category: string;
    let costPerKW: number;

    if (systemType === "residential") {
      if (monthlyBill <= 2000) {
        systemSize = 2;
        category = "Small Home";
        costPerKW = 72000;
      } else if (monthlyBill <= 4000) {
        systemSize = 3;
        category = "Medium Home";
        costPerKW = 70000;
      } else if (monthlyBill <= 7000) {
        systemSize = 5;
        category = "Large Home";
        costPerKW = 65000;
      } else if (monthlyBill <= 12000) {
        systemSize = 8;
        category = "Premium Home";
        costPerKW = 60000;
      } else {
        systemSize = Math.ceil(rawSize);
        category = "Villa / Bungalow";
        costPerKW = 58000;
      }
    } else {
      // Commercial
      if (monthlyBill <= 15000) {
        systemSize = 10;
        category = "Small Business";
        costPerKW = 55000;
      } else if (monthlyBill <= 40000) {
        systemSize = 25;
        category = "Medium Business";
        costPerKW = 50000;
      } else if (monthlyBill <= 100000) {
        systemSize = 50;
        category = "Large Business";
        costPerKW = 45000;
      } else {
        systemSize = Math.ceil(rawSize);
        category = "Industrial / Factory";
        costPerKW = 42000;
      }
    }

    const systemCostWithoutSubsidy = Math.round(systemSize * costPerKW);

    let subsidyAmount = 0;
    if (systemType === "residential") {
      if (systemSize >= 3) subsidyAmount = 78000;
      else if (systemSize >= 2) subsidyAmount = 60000;
      else if (systemSize >= 1) subsidyAmount = 30000;
    }

    const systemCostWithSubsidy = Math.max(systemCostWithoutSubsidy - subsidyAmount, 0);
    const monthlySavings = Math.round(monthlyBill * 0.85);
    const annualSavings = monthlySavings * 12;
    const effectiveCost = (includeSubsidy && systemType === "residential") ? systemCostWithSubsidy : systemCostWithoutSubsidy;
    const paybackYears = Math.round((effectiveCost / annualSavings) * 10) / 10;
    const co2Saved = Math.round(monthlyUnits * 12 * 0.82 / 1000 * 10) / 10;

    setResult({ systemSize, monthlySavings, annualSavings, paybackYears, systemCostWithSubsidy, systemCostWithoutSubsidy, co2Saved, subsidyAmount, category, systemType });
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollAnimator className="text-center mb-10">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Solar Calculator</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
            How Much Can <span className="gradient-text">You Save?</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Enter your monthly electricity bill and discover your potential savings with solar energy.
          </p>
        </ScrollAnimator>

        <ScrollAnimator>
          <div className="max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-5 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-bl-full" />

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
                {/* Input side */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-base sm:text-lg">Calculate Your Savings</h3>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">Takes only 5 seconds</p>
                    </div>
                  </div>

                  {/* System Type Toggle */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <button
                      onClick={() => { setSystemType("residential"); setResult(null); }}
                      className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                        systemType === "residential"
                          ? "bg-primary/15 border-primary text-primary"
                          : "glass border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <Home className="w-4 h-4" />
                      Residential
                    </button>
                    <button
                      onClick={() => { setSystemType("commercial"); setResult(null); setIncludeSubsidy(false); }}
                      className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                        systemType === "commercial"
                          ? "bg-primary/15 border-primary text-primary"
                          : "glass border-border text-muted-foreground hover:border-primary/30"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      Commercial
                    </button>
                  </div>

                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Monthly Electricity Bill (₹)
                  </label>
                  <div className="relative mb-1">
                    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder={systemType === "residential" ? "e.g. 3000" : "e.g. 25000"}
                      value={bill}
                      onChange={(e) => { setBill(e.target.value); setError(""); }}
                      className={`pl-9 bg-secondary/50 border-border focus:border-primary h-11 sm:h-12 text-base sm:text-lg ${error ? "border-destructive" : ""}`}
                    />
                  </div>
                  {error && <p className="text-destructive text-xs mb-2">{error}</p>}

                  {/* Govt Subsidy Toggle - only for residential */}
                  {systemType === "residential" && (
                    <label className="flex items-center gap-3 mb-4 mt-3 glass rounded-xl px-4 py-3 cursor-pointer group hover:border-primary/20 transition-all">
                      <input
                        type="checkbox"
                        checked={includeSubsidy}
                        onChange={(e) => setIncludeSubsidy(e.target.checked)}
                        className="w-4 h-4 accent-primary rounded"
                      />
                      <div className="flex items-center gap-2">
                        <Landmark className="w-4 h-4 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-foreground">Include Govt. Subsidy (PM Surya Ghar)</span>
                      </div>
                    </label>
                  )}

                  <Button
                    onClick={calculate}
                    className="w-full animate-pulse-glow font-bold py-5 text-sm sm:text-base group"
                  >
                    Calculate Savings
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex items-start gap-1.5 mt-3">
                    <AlertTriangle className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-[9px] sm:text-[10px] text-muted-foreground leading-relaxed">
                      * Prices may vary based on market conditions. This is an estimated price range. Actual costs depend on site survey, equipment selection & location.
                    </p>
                  </div>
                </div>

                {/* Results side */}
                <div>
                  {result ? (
                    <div className="space-y-3 animate-fade-in">
                      <div className="glass rounded-xl p-4 border-primary/20">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-3">
                            <Sun className="w-5 h-5 text-primary" />
                            <span className="text-xs sm:text-sm text-muted-foreground">Recommended System</span>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                            result.systemType === "residential" ? "bg-primary/15 text-primary" : "bg-accent text-accent-foreground"
                          }`}>
                            {result.category}
                          </span>
                        </div>
                        <div className="text-xl sm:text-2xl font-extrabold text-foreground">{result.systemSize} kW</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {includeSubsidy && result.systemType === "residential" && result.subsidyAmount > 0 ? (
                            <>
                              <span className="line-through mr-2">₹{result.systemCostWithoutSubsidy.toLocaleString('en-IN')}</span>
                              <span className="text-primary font-bold">₹{result.systemCostWithSubsidy.toLocaleString('en-IN')}</span>
                              <span className="ml-1">(after subsidy)</span>
                            </>
                          ) : (
                            <span>Est. Cost: ₹{result.systemCostWithoutSubsidy.toLocaleString('en-IN')}</span>
                          )}
                        </div>
                        {includeSubsidy && result.systemType === "residential" && result.subsidyAmount > 0 && (
                          <div className="flex items-center gap-1.5 mt-2 bg-primary/10 rounded-lg px-3 py-1.5">
                            <BadgeIndianRupee className="w-4 h-4 text-primary" />
                            <span className="text-[10px] sm:text-xs font-semibold text-primary">
                              Govt. Subsidy: ₹{result.subsidyAmount.toLocaleString('en-IN')} savings!
                            </span>
                          </div>
                        )}
                        {result.systemType === "commercial" && (
                          <div className="flex items-center gap-1.5 mt-2 bg-accent/30 rounded-lg px-3 py-1.5">
                            <Building2 className="w-4 h-4 text-accent-foreground" />
                            <span className="text-[10px] sm:text-xs font-semibold text-accent-foreground">
                              Accelerated depreciation benefit available
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="glass rounded-xl p-3 sm:p-4">
                          <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
                          <div className="text-base sm:text-lg font-bold text-primary">₹{result.monthlySavings.toLocaleString('en-IN')}</div>
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground">Monthly Savings</div>
                        </div>
                        <div className="glass rounded-xl p-3 sm:p-4">
                          <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
                          <div className="text-base sm:text-lg font-bold text-foreground">₹{result.annualSavings.toLocaleString('en-IN')}</div>
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground">Annual Savings</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="glass rounded-xl p-3 sm:p-4">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
                          <div className="text-base sm:text-lg font-bold text-foreground">{result.paybackYears} Yrs</div>
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground">Payback Period</div>
                        </div>
                        <div className="glass rounded-xl p-3 sm:p-4">
                          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-primary mb-1.5" />
                          <div className="text-base sm:text-lg font-bold text-foreground">{result.co2Saved} T</div>
                          <div className="text-[9px] sm:text-[10px] text-muted-foreground">CO₂ Saved/Year</div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10 font-semibold text-sm" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                        Get Exact Quote — It's Free
                      </Button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center py-6 sm:py-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-float">
                        <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">See Your Savings</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground max-w-xs">
                        Enter your monthly electricity bill to see how much you can save with solar panels.
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
