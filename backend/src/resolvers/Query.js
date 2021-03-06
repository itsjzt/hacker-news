exports.feed = async (parent, args, context, info) => {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter }
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.skip,
    orderBy: args.orderBy
  })

  const count = await context.prisma.
    linksConnection({ where, }).
    aggregate().
    count()

  return { links, count }
}
exports.link = (parent, args, context, info) => {
  return context.prisma.link({ id: args.id })
}