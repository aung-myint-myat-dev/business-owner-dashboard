import { PRODUCTS } from "@/features/products/constants";
import { PACKAGES } from "../constants";
import PackageCard from "./package-card";
import { Badge } from "@/components/ui/badge";
import { Box } from "lucide-react";

export default function PackageGroup({ product_id }) {
  const product = PRODUCTS.find((p) => p.id === product_id);
  const pkgs = PACKAGES.filter((pkg) => pkg.product_id === product_id);

  if (!product) return null;

  return (
    <section className="overflow-hidden rounded-xl border shadow-xs bg-card">
      {/* Product Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-muted/50 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Box className="size-5 shrink-0 text-muted-foreground" />

          <h2 className="text-base font-semibold tracking-tight">
            {product.name}
          </h2>

          <Badge variant="outline" className="text-xs leading-none">
            {pkgs.length} Packages
          </Badge>
        </div>
      </div>

      {/* Package Container */}
      <div className="bg-background p-4">
        {pkgs.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pkgs.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-dashed py-8 text-center">
            <p className="text-sm text-muted-foreground">
              No packages available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}