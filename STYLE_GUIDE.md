# Medal Techie Style Guide

This document outlines the design system, color palette, typography, spacing, and component guidelines for the Medal Techie project.

## 🎨 Color Palette

### Primary Colors
- **Primary 50-950**: Blue scale for main brand colors
- **Primary 600**: Main brand color (#2563eb)
- **Primary 400**: Light brand color for hover states (#60a5fa)
- **Primary 800**: Dark brand color for active states (#1e40af)

### Secondary Colors
- **Secondary 50-950**: Gray scale for text and backgrounds
- **Secondary 600**: Main text color (#475569)
- **Secondary 100**: Light background (#f1f5f9)
- **Secondary 800**: Dark text (#1e293b)

### Accent Colors
- **Accent 50-950**: Cyan scale for highlights and accents
- **Accent 600**: Main accent color (#0284c7)

### Semantic Colors
- **Success**: Green scale for positive actions
- **Warning**: Yellow scale for caution states
- **Error**: Red scale for error states

## 🔤 Typography

### Font Families
- **Sans**: Inter (primary), system fallbacks
- **Mono**: JetBrains Mono, Fira Code, Monaco
- **Serif**: Georgia, Times New Roman

### Font Sizes
- **xs**: 12px (0.75rem)
- **sm**: 14px (0.875rem)
- **base**: 16px (1rem)
- **lg**: 18px (1.125rem)
- **xl**: 20px (1.25rem)
- **2xl**: 24px (1.5rem)
- **3xl**: 30px (1.875rem)
- **4xl**: 36px (2.25rem)
- **5xl**: 48px (3rem)
- **6xl**: 60px (3.75rem)

### Font Weights
- **thin**: 100
- **extralight**: 200
- **light**: 300
- **normal**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700
- **extrabold**: 800
- **black**: 900

## 📏 Spacing Scale

- **0**: 0px
- **1**: 4px (0.25rem)
- **2**: 8px (0.5rem)
- **3**: 12px (0.75rem)
- **4**: 16px (1rem)
- **5**: 20px (1.25rem)
- **6**: 24px (1.5rem)
- **8**: 32px (2rem)
- **10**: 40px (2.5rem)
- **12**: 48px (3rem)
- **16**: 64px (4rem)
- **20**: 80px (5rem)
- **24**: 96px (6rem)
- **32**: 128px (8rem)

## 🎯 Border Radius

- **none**: 0px
- **sm**: 2px (0.125rem)
- **base**: 4px (0.25rem)
- **md**: 6px (0.375rem)
- **lg**: 8px (0.5rem)
- **xl**: 12px (0.75rem)
- **2xl**: 16px (1rem)
- **3xl**: 24px (1.5rem)
- **full**: 9999px

## 🌟 Shadows

- **sm**: Subtle shadow
- **base**: Default shadow
- **md**: Medium shadow
- **lg**: Large shadow
- **xl**: Extra large shadow
- **2xl**: Maximum shadow
- **inner**: Inset shadow

## ⚡ Transitions

- **fast**: 150ms
- **base**: 200ms
- **slow**: 300ms
- **slower**: 500ms

## 🎨 Usage Examples

### Colors
```jsx
// Using Tailwind classes with our custom colors
<div className="bg-primary-600 text-white">Primary Button</div>
<div className="bg-secondary-100 text-secondary-800">Secondary Background</div>
<div className="text-accent-600">Accent Text</div>
<div className="bg-success-100 text-success-800">Success Message</div>
<div className="bg-warning-100 text-warning-800">Warning Message</div>
<div className="bg-error-100 text-error-800">Error Message</div>

// Using CSS custom properties directly
<div style={{ backgroundColor: 'var(--color-primary-600)' }}>Custom Background</div>
```

### Typography
```jsx
// Font families
<h1 className="font-sans">Sans Serif Heading</h1>
<code className="font-mono">Monospace Code</code>
<blockquote className="font-serif">Serif Quote</blockquote>

// Font sizes
<h1 className="text-4xl font-bold">Large Heading</h1>
<p className="text-lg">Large Paragraph</p>
<small className="text-sm">Small Text</small>

// Font weights
<p className="font-medium">Medium Weight</p>
<p className="font-semibold">Semibold Weight</p>
<p className="font-bold">Bold Weight</p>
```

### Spacing
```jsx
// Padding and margins
<div className="p-4">Padding 16px</div>
<div className="m-6">Margin 24px</div>
<div className="px-8 py-4">Horizontal 32px, Vertical 16px</div>

// Section spacing utilities
<section className="p-section">Section with standard padding</section>
<section className="p-section-sm">Section with small padding</section>
<section className="p-section-lg">Section with large padding</section>
```

### Borders and Shadows
```jsx
// Border radius
<div className="rounded-lg">Rounded corners</div>
<div className="rounded-xl">Extra rounded corners</div>
<div className="rounded-full">Fully rounded</div>

// Shadows
<div className="shadow-md">Medium shadow</div>
<div className="shadow-lg">Large shadow</div>
<div className="shadow-xl">Extra large shadow</div>
```

### Transitions
```jsx
// Transition durations
<button className="transition-colors duration-base hover:bg-primary-700">
  Hover Effect
</button>

<div className="transition-all duration-slow hover:scale-105">
  Slow Scale Effect
</div>
```

## 🔧 Custom CSS Variables

You can also use CSS custom properties directly in your styles:

```css
.my-custom-class {
  color: var(--color-primary-600);
  background-color: var(--color-secondary-100);
  font-family: var(--font-family-sans);
  font-size: var(--text-lg);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}
```

## 📱 Responsive Design

The design system includes responsive breakpoints:
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+
- **2xl**: 1536px+

## 🎯 Best Practices

1. **Use Tailwind classes first** - Leverage the extended theme
2. **Fall back to CSS variables** - When you need custom values
3. **Maintain consistency** - Use the predefined scales
4. **Think mobile-first** - Start with mobile and scale up
5. **Use semantic colors** - Success, warning, error for appropriate states

## 🔄 Updating the Design System

To update colors, fonts, or other design tokens:

1. **Modify CSS variables** in `src/index.css`
2. **Update Tailwind config** if adding new scales
3. **Test across components** to ensure consistency
4. **Document changes** in this style guide

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Custom Properties Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design System Best Practices](https://www.designsystems.com/)
