# OMGTech Pop-Up Shop — PRD

## Original Problem Statement
Build a clean, eye-catching, Apple-style, mobile-friendly landing page for OMGTech designed like a limited-time tech pop-up shop. Products: iPads, Lenovo laptops, All-in-One desktop PCs. Tone: limited inventory, first come first served, no restocks guaranteed, simple request process, local pickup, clean tech-store look.

## Architecture
- Frontend-only React (CRA + craco) landing page at `/`
- Tailwind + shadcn UI (Accordion, Select, Input, Textarea, Label, Sonner)
- Fonts: Outfit (display) + Figtree (body) via Google Fonts
- No backend persistence (per user choice)
- Contact form submission: client-side mock + sonner toast

## User Personas
- Local bargain hunters / students wanting affordable iPads or laptops
- Small businesses & schools needing bulk devices
- Resellers checking inventory

## Core Requirements (static)
- Hero with two CTAs + urgency line
- 3 product cards: iPad, Lenovo ThinkPad, Lenovo AIO PC (image, starting price, condition, quantity, Request button)
- 4-step buying process
- 6 trust points
- 6-item FAQ accordion
- Contact form: Name, Email, Phone, Device, Quantity, Message — button "Check Availability"
- Footer: "OMGTech Pop-Up Shop — Available Until Inventory Is Gone"

## What's Been Implemented (2025-12)
- Sticky glass-morphic nav + mobile menu
- Hero (Outfit display, marquee strip, urgency tag)
- Featured Devices section with prefill-via-CustomEvent into contact form
- Process (4 steps), Trust (6 points), FAQ (shadcn Accordion), Contact form (shadcn Input/Select/Textarea + sonner), dark footer
- Full data-testid coverage; testing agent 100% pass

## Prioritized Backlog
- **P0**: Replace "Starting at $XXX" with real prices when finalized
- **P1**: Connect contact form to backend (Mongo storage + admin view) or email forwarding (Resend/SendGrid)
- **P1**: Auto-close mobile menu after anchor click
- **P2**: Add inventory countdown / "X units left" with live decrement
- **P2**: Add OG/meta tags & favicon for share previews
- **P2**: Add per-device detail modal with full specs
