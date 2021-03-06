export default [
  {
    name: 'Introduction',
    posts: [
      {
        name: 'What is IRI?',
        href: '/iri/what-is-iri',
        aliases: ['/iri']
      }
    ]
  },
  {
    name: 'Using IRI',
    posts: [
      {
        name: 'Installing IRI',
        posts: [
          {
            name: 'Linux',
            href: '/iri/usage/install-iri-linux'
          },
          {
            name: 'Docker',
            href: '/iri/usage/install-iri-docker'
          }
        ]
      },
      {
        name: 'Configuring IRI',
        href: '/iri/usage/configuration'
      },
      {
        name: 'Finding Neighbours',
        href: '/iri/usage/finding-neighbours'
      },
      {
        name: 'Local snapshots',
        href: '/iri/usage/local-snapshot'
      },
      {
        name: 'Troubleshooting',
        href: '/iri/usage/troubleshooting-iri'
      }
    ]
  },
  {
    name: 'Interact',
    posts: [
      {
        name: `HTTP API`,
        href: '/iri/interact/http-api'
      },
      {
        name: `ZeroMQ`,
        href: '/iri/interact/zero-mq'
      }
    ]
  }
]
