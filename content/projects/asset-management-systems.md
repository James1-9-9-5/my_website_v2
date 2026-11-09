---
title: Asset Management Systems
subtitle: From disconnected inspections to one live maintenance workflow
summary: Asset records, field inspections, and maintenance work lived in separate places. I built a connected asset database and field-to-dashboard workflow so deficiencies are reported, tracked, and closed in one place.
role: tapestry
tools: [PostgreSQL / PostGIS, ArcGIS Pro, ArcGIS Online, Survey123, Field Maps, QuickCapture, Dashboards]
tags: [asset-management, field-data, dashboards]
date: 2026-11-01
featured: true
order: 1
cover: ../../media-source/projects/asset-management.png
coverAlt: Illustration of a monitor showing an asset management dashboard, with a map of houses, roads, and a water main, one house flagged and linked to a highlighted work order.
clearance: redacted
---

## Problem
Asset records, field inspections, and maintenance work were disconnected, so deficiencies were slow to report and hard to track through to completion.

## Approach
I designed a relational PostgreSQL/PostGIS asset database with custom schemas, automated IDs, editor tracking, and versioning. It connects to field apps (Survey123, Field Maps, QuickCapture) for inspections and to ArcGIS Dashboards for reporting, so data captured on site feeds straight into the tools staff use to plan work.

The systems support infrastructure and housing assessments in remote First Nations communities, and community staff are trained to configure and maintain them themselves.

## Outcome
Real-time deficiency reporting, maintenance tracking, and work order management now run in one workflow, from field inspection to dashboard.
