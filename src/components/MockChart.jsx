import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
export default function MockChart() {
  // --- State Variables ---
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyInvestment, setMonthlyInvestment] = useState(15000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const navigate = useNavigate();
  // --- Financial Calculations ---
  const investmentYears = Math.max(1, retirementAge - currentAge);
  const totalMonths = investmentYears * 12;
  const monthlyRate = expectedReturn / 12 / 100;

  // Total Invested Amount
  const totalInvested = monthlyInvestment * totalMonths;

  // Future Value of SIP Formula: M = P * [((1 + i)^n - 1) / i] * (1 + i)
  const estimatedWealth = useMemo(() => {
    if (monthlyRate === 0) return totalInvested;
    return (
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
      (1 + monthlyRate)
    );
  }, [monthlyInvestment, monthlyRate, totalMonths, totalInvested]);

  const wealthGained = Math.max(0, estimatedWealth - totalInvested);

  // --- Helper to Format Indian Currency System (Lakhs/Crores) ---
  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹${(value / 100000).toFixed(2)} Lakh`;
    }
    return `₹${Math.round(value).toLocaleString('en-IN')}`;
  };

  // --- Generating Chart Data Points Dynamically ---
  // We generate a curve over 5 data points from current age to retirement age
  const chartPointsCount = 5;
  const chartData = useMemo(() => {
    const points = [];
    for (let i = 0; i < chartPointsCount; i++) {
      const progress = i / (chartPointsCount - 1);
      const currentYearStep = Math.round(investmentYears * progress);
      const currentMonths = currentYearStep * 12;

      let valueAtStep = 0;
      if (currentMonths > 0) {
        valueAtStep =
          monthlyInvestment *
          ((Math.pow(1 + monthlyRate, currentMonths) - 1) / monthlyRate) *
          (1 + monthlyRate);
      }

      points.push({
        year: currentAge + currentYearStep,
        value: valueAtStep,
      });
    }
    return points;
  }, [currentAge, investmentYears, monthlyInvestment, monthlyRate]);

  // --- SVG Path Construction ---
  // Fixed grid canvas dimensions
  const width = 500;
  const height = 200;
  const paddingX = 40;
  const paddingY = 20;

  const svgCoordinates = useMemo(() => {
    if (chartData.length === 0) return { linePath: '', areaPath: '', lastX: 0, lastY: 0 };

    const maxVal = estimatedWealth || 1;

    // Map points to SVG canvas space
    const coords = chartData.map((d, index) => {
      const x = paddingX + (index / (chartData.length - 1)) * (width - paddingX * 2);
      // Invert Y because SVG (0,0) starts at top-left
      const y = height - paddingY - (d.value / maxVal) * (height - paddingY * 2);
      return { x, y };
    });

    // Generate smooth cubic bezier curve string
    let linePath = `M ${coords[0].x} ${coords[0].y}`;
    for (let i = 0; i < coords.length - 1; i++) {
      const p0 = coords[i];
      const p1 = coords[i + 1];
      // Control points for curve smoothing
      const cpX1 = p0.x + (p1.x - p0.x) / 2;
      const cpY1 = p0.y;
      const cpX2 = p0.x + (p1.x - p0.x) / 2;
      const cpY2 = p1.y;
      linePath += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
    }

    // Close the path at the bottom to construct the fillable area
    const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height - paddingY} L ${coords[0].x} ${height - paddingY} Z`;
    const lastPoint = coords[coords.length - 1];

    return { linePath, areaPath, lastX: lastPoint.x, lastY: lastPoint.y };
  }, [chartData, estimatedWealth]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8 bg-zinc-950 text-white rounded-[32px] border border-white/10 shadow-2xl backdrop-blur-xl">

      {/* 4. Premium Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/5 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Financial Planner</span>
          <h2 className="text-xl font-medium tracking-tight mt-0.5 text-zinc-200 flex items-center gap-2">
            Live Projection
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </h2>
        </div>
        <div className="sm:text-right">
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase block mb-0.5">Projected Corpus</span>
          <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white transition-all duration-300">
            {formatCurrency(estimatedWealth)}
          </div>
          <div className="text-xs font-medium text-emerald-400 mt-1 transition-all duration-300">
            +{formatCurrency(wealthGained)} Wealth Created
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* 5. Interactive Sliders Section */}
        <div className="lg:col-span-5 space-y-6">

          {/* Current Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400 font-medium">Current Age</span>
              <span className="text-zinc-200 font-semibold">{currentAge} Years</span>
            </div>
            <input
              type="range"
              min="18"
              max="55"
              value={currentAge}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C6A15B]"
            />
          </div>

          {/* Retirement Age Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400 font-medium">Retirement Age</span>
              <span className="text-zinc-200 font-semibold">{retirementAge} Years</span>
            </div>
            <input
              type="range"
              min="56"
              max="70"
              value={retirementAge}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C6A15B]"
            />
          </div>

          {/* Monthly Investment Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400 font-medium">Monthly Investment</span>
              <span className="text-zinc-200 font-semibold">{formatCurrency(monthlyInvestment)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C6A15B]"
            />
          </div>

          {/* Expected Return Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-zinc-400 font-medium">Expected Return</span>
              <span className="text-zinc-200 font-semibold">{expectedReturn}%</span>
            </div>
            <input
              type="range"
              min="6"
              max="18"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#C6A15B]"
            />
          </div>
        </div>

        {/* 3. Animated SVG Chart Canvas */}
        <div className="lg:col-span-7 bg-zinc-900/40 border border-white/5 p-4 rounded-2xl relative">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-auto overflow-visible"
          >
            <defs>
              {/* Gold stroke line gradient */}
              <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8A6E3C" />
                <stop offset="50%" stopColor="#C6A15B" />
                <stop offset="100%" stopColor="#F3E5AB" />
              </linearGradient>

              {/* Translucent gold fill area gradient */}
              <linearGradient id="goldAreaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#C6A15B" stopOpacity="0.00" />
              </linearGradient>

              {/* Soft glow filter for the ending pointer */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Horizontal Grid lines helper */}
            <line x1={paddingX} y1={paddingY} x2={width - paddingX} y2={paddingY} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1={paddingX} y1={(height) / 2} x2={width - paddingX} y2={(height) / 2} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <line x1={paddingX} y1={height - paddingY} x2={width - paddingX} y2={height - paddingY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

            {/* Filled Area Element under the path */}
            <path
              d={svgCoordinates.areaPath}
              fill="url(#goldAreaGradient)"
              className="transition-all duration-500 ease-out"
            />

            {/* Curved Path Stroke */}
            <path
              d={svgCoordinates.linePath}
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />

            {/* Glowing endpoint dot marker */}
            <circle
              cx={svgCoordinates.lastX}
              cy={svgCoordinates.lastY}
              r="6"
              fill="#F3E5AB"
              filter="url(#glow)"
              className="transition-all duration-500 ease-out"
            />
            <circle
              cx={svgCoordinates.lastX}
              cy={svgCoordinates.lastY}
              r="3"
              fill="#C6A15B"
              className="transition-all duration-500 ease-out"
            />

            {/* X Axis Labels */}
            <text x={paddingX} y={height - 4} fill="#71717a" fontSize="10" textAnchor="middle" className="font-sans">
              Age {chartData[0]?.year}
            </text>
            <text x={width / 2} y={height - 4} fill="#71717a" fontSize="10" textAnchor="middle" className="font-sans">
              Age {chartData[Math.floor(chartData.length / 2)]?.year}
            </text>
            <text x={width - paddingX} y={height - 4} fill="#71717a" fontSize="10" textAnchor="middle" className="font-sans">
              Age {chartData[chartData.length - 1]?.year}
            </text>

            {/* Dynamic Y Axis Tracker Labels floating over graph boundaries */}
            <text x={paddingX - 5} y={paddingY + 4} fill="#52525b" fontSize="9" textAnchor="start">
              {formatCurrency(estimatedWealth)}
            </text>
            <text x={paddingX - 5} y={height - paddingY - 4} fill="#52525b" fontSize="9" textAnchor="start">
              ₹0
            </text>
          </svg>
        </div>
      </div>

      {/* 6. Bottom Summary Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
        <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl">
          <div className="text-xs font-semibold tracking-wide text-zinc-500 uppercase mb-1">Total Invested</div>
          <div className="text-lg font-medium text-zinc-200 transition-all duration-300">
            {formatCurrency(totalInvested)}
          </div>
        </div>
        <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl">
          <div className="text-xs font-semibold tracking-wide text-zinc-500 uppercase mb-1">Estimated Returns</div>
          <div className="text-lg font-medium text-emerald-400 transition-all duration-300">
            {formatCurrency(wealthGained)}
          </div>
        </div>
        <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl">
          <div className="text-xs font-semibold tracking-wide text-zinc-500 uppercase mb-1">Retirement Corpus</div>
          <div className="text-lg font-medium text-white transition-all duration-300">
            {formatCurrency(estimatedWealth)}
          </div>
        </div>
      </div>

      {/* 7. Bottom Call To Action Button */}
      <button
        type="button"
        onClick={() => navigate("/sip-calculator")}
        className="w-full mt-6 py-3.5 px-4 bg-zinc-900 border border-white/10 hover:border-[#C6A15B]/40 text-sm font-medium tracking-wide text-zinc-200 hover:text-white rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group hover:bg-zinc-800/80"
      >
        Open Advanced Financial Planner
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}