import React, { useMemo } from 'react';

export default function Radar({ title, axes, values, legendLow, legendHigh }) {
  const size = 320;
  const center = size / 2;
  const maxRadius = size / 2 - 24;
  const numAxes = axes.length;
  const angleStep = (Math.PI * 2) / numAxes;

  const points = useMemo(() => {
    return values.map((v, i) => {
      const ratio = Math.max(0, Math.min(1, v / 5));
      const angle = -Math.PI / 2 + i * angleStep;
      const r = ratio * maxRadius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    });
  }, [values, angleStep, maxRadius, center]);

  const grid = useMemo(() => {
    const rings = [1, 0.75, 0.5, 0.25];
    return rings.map((ratio, idx) => (
      <circle
        key={idx}
        cx={center}
        cy={center}
        r={maxRadius * ratio}
        fill="none"
        stroke="var(--brand)"
        opacity={0.25}
      />
    ));
  }, [center, maxRadius]);

  const spokes = useMemo(() => {
    return axes.map((label, i) => {
      const angle = -Math.PI / 2 + i * angleStep;
      const x = center + maxRadius * Math.cos(angle);
      const y = center + maxRadius * Math.sin(angle);
      const lx = center + (maxRadius + 12) * Math.cos(angle);
      const ly = center + (maxRadius + 12) * Math.sin(angle);
      return (
        <g key={label}>
          <line x1={center} y1={center} x2={x} y2={y} stroke="var(--brand-2)" opacity={0.25} />
          <text x={lx} y={ly} fontSize={11} textAnchor="middle" fill="var(--text)" opacity={0.85}>
            {label}
          </text>
        </g>
      );
    });
  }, [axes, angleStep, center, maxRadius]);

  return (
    <div style={{ marginTop: 32, display: 'grid', placeItems: 'center' }}>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <svg width={size} height={size}>
        {grid}
        {spokes}
        <polygon
          points={points.join(' ')}
          fill="url(#radarGrad)"
          stroke="var(--brand-2)"
          strokeWidth={3}
          opacity={1}
        />
        <defs>
          <linearGradient id="radarGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--brand-2)" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </svg>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', opacity: 0.9 }}>
        <span style={{ fontSize: 12 }}>{legendLow}</span>
        <div style={{ height: 6, width: 140, background: 'linear-gradient(90deg, var(--brand), var(--brand-2))', borderRadius: 3 }} />
        <span style={{ fontSize: 12 }}>{legendHigh}</span>
      </div>
    </div>
  );
}

