const newLinkSubscription = (parent, args, context, info) => (
  context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
)

const newVoteSubscription = (parent, args, context, info) => (
  context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
)

exports.newLink = {
  subscribe: newLinkSubscription,
  resolve: payload => payload
}

exports.newVote = {
  subscribe: newVoteSubscription,
  resolve: payload => payload
}
