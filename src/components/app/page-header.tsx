export default function PageHeader({ title, description, icon: Icon }) {
  return (
    <>
      <header className="flex items-center gap-4">

        {Icon && (
          <div className="size-12 bg-primary rounded-md flex items-center justify-center">
            {Icon && <Icon className="text-primary-foreground size-6" />}
          </div>
        )}

        <div>
          <h2 className="text-2xl tracking-tight font-bold">{title}</h2>
          <p className="text-[14px] text-muted-foreground">{description}</p>
        </div>
      </header>
    </>
  )
}