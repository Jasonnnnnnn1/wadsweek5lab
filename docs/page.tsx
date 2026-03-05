"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import spec from "@/lib/swagger.json";

export default function DocsPage() {
  return <SwaggerUI spec={spec} />;
}
