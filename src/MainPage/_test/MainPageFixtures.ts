import faker from 'faker'

// faker.image.imageUrl(300, 300)

export const responseSuccess = {
  bundles: [1, 2, 3].map(() => ({
    maker: {
      user: {
        username: 'BatmanS',
      },
      profile_img_url:
        'https://storage.googleapis.com/opensea-static/opensea-profile/10.png',
      address: '0x7c23b1174d22d18964f80e0cc1b77dbb02582d06',
      config: '',
      discord_id: '',
    },
    slug: '3-uniaqua-red-grrn-blue-cnr',
    assets: [
      {
        id: 21347722,
        token_id: '1000070550',
        num_sales: 0,
        background_color: 'FFFFFF',
        image_url:
          'https://lh3.googleusercontent.com/LsX8RxclGnh2w5WldC2ppdiVBI5CXZPP2_jEY23zIqcx47EgPKAZ8A5qnlwRhUXTakkoPGdmElHCztMrCltkV-J82ZVUQ7eM8hKeHA',
        image_preview_url:
          'https://lh3.googleusercontent.com/LsX8RxclGnh2w5WldC2ppdiVBI5CXZPP2_jEY23zIqcx47EgPKAZ8A5qnlwRhUXTakkoPGdmElHCztMrCltkV-J82ZVUQ7eM8hKeHA=s250',
        image_thumbnail_url:
          'https://lh3.googleusercontent.com/LsX8RxclGnh2w5WldC2ppdiVBI5CXZPP2_jEY23zIqcx47EgPKAZ8A5qnlwRhUXTakkoPGdmElHCztMrCltkV-J82ZVUQ7eM8hKeHA=s128',
        image_original_url:
          'https://assets.polkamon.com/images/Unimons_T03C02H01B01G00.jpg',
        animation_url:
          'https://storage.opensea.io/files/801a40838974ee2a010d4391dd946027.mp4',
        animation_original_url:
          'https://assets.polkamon.com/videos/Unimons_T03C02H01B01G00.mp4',
        name: 'Uniaqua',
        description:
          'From raging seas to sunset landscapes, the Uniaqua is fit for all terrains. Where other Polkamon glory in their uniqueness, the Uniaqua takes its prestige in versatility.',
        external_link: 'https://polkamon.com/polkamon/T03C02H01B01G00',
        asset_contract: {
          address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
          asset_contract_type: 'non-fungible',
          created_date: '2021-03-29T13:50:15.075765',
          name: 'PolkamonOfficialCollection',
          nft_version: '3.0',
          opensea_version: null,
          owner: null,
          schema_name: 'ERC721',
          symbol: 'PMONC',
          total_supply: '0',
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          external_link: 'https://polkamon.com',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          default_to_fiat: false,
          dev_buyer_fee_basis_points: 0,
          dev_seller_fee_basis_points: 0,
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: 0,
          opensea_seller_fee_basis_points: 250,
          buyer_fee_basis_points: 0,
          seller_fee_basis_points: 250,
          payout_address: null,
        },
        owner: {
          user: {
            username: 'BatmanS',
          },
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/10.png',
          address: '0x7c23b1174d22d18964f80e0cc1b77dbb02582d06',
          config: '',
          discord_id: '',
        },
        permalink:
          'https://opensea.io/assets/0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d/1000070550',
        collection: {
          banner_image_url:
            'https://lh3.googleusercontent.com/NvdDSV8QKiIu1XiJTXmHqK0v2_Xd0zXs4n1j9McmDDobCIByulyBFelOyzs4D5T-rwXS-fFMxqNuK7SPIE1t4dIFMnzNAv4PycXj4jk=s2500',
          chat_url: null,
          created_date: '2021-03-29T17:40:16.454131',
          default_to_fiat: false,
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          dev_buyer_fee_basis_points: '0',
          dev_seller_fee_basis_points: '0',
          discord_url: null,
          display_data: {
            card_display_style: 'contain',
          },
          external_url: 'https://polkamon.com',
          featured: false,
          featured_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          hidden: false,
          safelist_request_status: 'verified',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          is_subject_to_whitelist: false,
          large_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          medium_username: 'polkamon',
          name: 'Polkamon',
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: '0',
          opensea_seller_fee_basis_points: '250',
          payout_address: null,
          require_email: false,
          short_description: null,
          slug: 'polkamon',
          telegram_url: 'https://t.me/polkamonorg',
          twitter_username: 'Polkamonorg',
          instagram_username: null,
          wiki_url: null,
        },
        decimals: 0,
      },
      {
        id: 21394746,
        token_id: '1000187253',
        num_sales: 0,
        background_color: 'FFFFFF',
        image_url:
          'https://lh3.googleusercontent.com/cacTAZYfAT5Uy1t20_Zl6B2T4KASP1YaAPV6ly5u_DXbksSAKS3l3C4GI4DkExxRZKSOMiKeqZZ3ToJVoYz1D3IMUYSv82RveADQ2MU',
        image_preview_url:
          'https://lh3.googleusercontent.com/cacTAZYfAT5Uy1t20_Zl6B2T4KASP1YaAPV6ly5u_DXbksSAKS3l3C4GI4DkExxRZKSOMiKeqZZ3ToJVoYz1D3IMUYSv82RveADQ2MU=s250',
        image_thumbnail_url:
          'https://lh3.googleusercontent.com/cacTAZYfAT5Uy1t20_Zl6B2T4KASP1YaAPV6ly5u_DXbksSAKS3l3C4GI4DkExxRZKSOMiKeqZZ3ToJVoYz1D3IMUYSv82RveADQ2MU=s128',
        image_original_url:
          'https://assets.polkamon.com/images/Unimons_T03C03H01B01G00.jpg',
        animation_url:
          'https://storage.opensea.io/files/8815f55acbfd4597ccc85b3979abebc8.mp4',
        animation_original_url:
          'https://assets.polkamon.com/videos/Unimons_T03C03H01B01G00.mp4',
        name: 'Uniaqua',
        description:
          'From raging seas to sunset landscapes, the Uniaqua is fit for all terrains. Where other Polkamon glory in their uniqueness, the Uniaqua takes its prestige in versatility.',
        external_link: 'https://polkamon.com/polkamon/T03C03H01B01G00',
        asset_contract: {
          address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
          asset_contract_type: 'non-fungible',
          created_date: '2021-03-29T13:50:15.075765',
          name: 'PolkamonOfficialCollection',
          nft_version: '3.0',
          opensea_version: null,
          owner: null,
          schema_name: 'ERC721',
          symbol: 'PMONC',
          total_supply: '0',
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          external_link: 'https://polkamon.com',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          default_to_fiat: false,
          dev_buyer_fee_basis_points: 0,
          dev_seller_fee_basis_points: 0,
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: 0,
          opensea_seller_fee_basis_points: 250,
          buyer_fee_basis_points: 0,
          seller_fee_basis_points: 250,
          payout_address: null,
        },
        owner: {
          user: {
            username: 'BatmanS',
          },
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/10.png',
          address: '0x7c23b1174d22d18964f80e0cc1b77dbb02582d06',
          config: '',
          discord_id: '',
        },
        permalink:
          'https://opensea.io/assets/0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d/1000187253',
        collection: {
          banner_image_url:
            'https://lh3.googleusercontent.com/NvdDSV8QKiIu1XiJTXmHqK0v2_Xd0zXs4n1j9McmDDobCIByulyBFelOyzs4D5T-rwXS-fFMxqNuK7SPIE1t4dIFMnzNAv4PycXj4jk=s2500',
          chat_url: null,
          created_date: '2021-03-29T17:40:16.454131',
          default_to_fiat: false,
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          dev_buyer_fee_basis_points: '0',
          dev_seller_fee_basis_points: '0',
          discord_url: null,
          display_data: {
            card_display_style: 'contain',
          },
          external_url: 'https://polkamon.com',
          featured: false,
          featured_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          hidden: false,
          safelist_request_status: 'verified',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          is_subject_to_whitelist: false,
          large_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          medium_username: 'polkamon',
          name: 'Polkamon',
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: '0',
          opensea_seller_fee_basis_points: '250',
          payout_address: null,
          require_email: false,
          short_description: null,
          slug: 'polkamon',
          telegram_url: 'https://t.me/polkamonorg',
          twitter_username: 'Polkamonorg',
          instagram_username: null,
          wiki_url: null,
        },
        decimals: 0,
      },
      {
        id: 21395437,
        token_id: '1000187553',
        num_sales: 0,
        background_color: 'FFFFFF',
        image_url:
          'https://lh3.googleusercontent.com/RAKJfBxR9h_P09Vm2d-Or9Gneow42my1IdpbwvYqyVnfSwNdOcV4WXxPuE2EBDaLlje1_oJToFL89Mbfpxyb6UV9b_KtVLSJ9zCDlX8',
        image_preview_url:
          'https://lh3.googleusercontent.com/RAKJfBxR9h_P09Vm2d-Or9Gneow42my1IdpbwvYqyVnfSwNdOcV4WXxPuE2EBDaLlje1_oJToFL89Mbfpxyb6UV9b_KtVLSJ9zCDlX8=s250',
        image_thumbnail_url:
          'https://lh3.googleusercontent.com/RAKJfBxR9h_P09Vm2d-Or9Gneow42my1IdpbwvYqyVnfSwNdOcV4WXxPuE2EBDaLlje1_oJToFL89Mbfpxyb6UV9b_KtVLSJ9zCDlX8=s128',
        image_original_url:
          'https://assets.polkamon.com/images/Unimons_T03C05H08B01G00.jpg',
        animation_url:
          'https://storage.opensea.io/files/2e197b0122b32ad9c9b3a11a82f54c74.mp4',
        animation_original_url:
          'https://assets.polkamon.com/videos/Unimons_T03C05H08B01G00.mp4',
        name: 'Uniaqua',
        description:
          'From raging seas to sunset landscapes, the Uniaqua is fit for all terrains. Where other Polkamon glory in their uniqueness, the Uniaqua takes its prestige in versatility.',
        external_link: 'https://polkamon.com/polkamon/T03C05H08B01G00',
        asset_contract: {
          address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
          asset_contract_type: 'non-fungible',
          created_date: '2021-03-29T13:50:15.075765',
          name: 'PolkamonOfficialCollection',
          nft_version: '3.0',
          opensea_version: null,
          owner: null,
          schema_name: 'ERC721',
          symbol: 'PMONC',
          total_supply: '0',
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          external_link: 'https://polkamon.com',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          default_to_fiat: false,
          dev_buyer_fee_basis_points: 0,
          dev_seller_fee_basis_points: 0,
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: 0,
          opensea_seller_fee_basis_points: 250,
          buyer_fee_basis_points: 0,
          seller_fee_basis_points: 250,
          payout_address: null,
        },
        owner: {
          user: {
            username: 'BatmanS',
          },
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/10.png',
          address: '0x7c23b1174d22d18964f80e0cc1b77dbb02582d06',
          config: '',
          discord_id: '',
        },
        permalink:
          'https://opensea.io/assets/0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d/1000187553',
        collection: {
          banner_image_url:
            'https://lh3.googleusercontent.com/NvdDSV8QKiIu1XiJTXmHqK0v2_Xd0zXs4n1j9McmDDobCIByulyBFelOyzs4D5T-rwXS-fFMxqNuK7SPIE1t4dIFMnzNAv4PycXj4jk=s2500',
          chat_url: null,
          created_date: '2021-03-29T17:40:16.454131',
          default_to_fiat: false,
          description:
            'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
          dev_buyer_fee_basis_points: '0',
          dev_seller_fee_basis_points: '0',
          discord_url: null,
          display_data: {
            card_display_style: 'contain',
          },
          external_url: 'https://polkamon.com',
          featured: false,
          featured_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          hidden: false,
          safelist_request_status: 'verified',
          image_url:
            'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
          is_subject_to_whitelist: false,
          large_image_url:
            'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
          medium_username: 'polkamon',
          name: 'Polkamon',
          only_proxied_transfers: false,
          opensea_buyer_fee_basis_points: '0',
          opensea_seller_fee_basis_points: '250',
          payout_address: null,
          require_email: false,
          short_description: null,
          slug: 'polkamon',
          telegram_url: 'https://t.me/polkamonorg',
          twitter_username: 'Polkamonorg',
          instagram_username: null,
          wiki_url: null,
        },
        decimals: 0,
      },
    ],
    name: faker.random.words(3),
    description: faker.lorem.paragraph(2),
    external_link: '',
    asset_contract: {
      collection: {
        banner_image_url:
          'https://lh3.googleusercontent.com/NvdDSV8QKiIu1XiJTXmHqK0v2_Xd0zXs4n1j9McmDDobCIByulyBFelOyzs4D5T-rwXS-fFMxqNuK7SPIE1t4dIFMnzNAv4PycXj4jk=s2500',
        chat_url: null,
        created_date: '2021-03-29T17:40:16.454131',
        default_to_fiat: false,
        description:
          'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
        dev_buyer_fee_basis_points: '0',
        dev_seller_fee_basis_points: '0',
        discord_url: null,
        display_data: {
          card_display_style: 'contain',
        },
        external_url: 'https://polkamon.com',
        featured: false,
        featured_image_url:
          'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
        hidden: false,
        safelist_request_status: 'verified',
        image_url:
          'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
        is_subject_to_whitelist: false,
        large_image_url:
          'https://lh3.googleusercontent.com/AagBX9ojONiTuhszoTxVg-eJid-m8wQDaqnWH3XW56icaHnjTvjSFjdntrP2ntJXSJEEHBQavKfuSQh8OB-GO8vanFeNzO2NczF0qdQ=s300',
        medium_username: 'polkamon',
        name: 'Polkamon',
        only_proxied_transfers: false,
        opensea_buyer_fee_basis_points: '0',
        opensea_seller_fee_basis_points: '250',
        payout_address: null,
        require_email: false,
        short_description: null,
        slug: 'polkamon',
        telegram_url: 'https://t.me/polkamonorg',
        twitter_username: 'Polkamonorg',
        instagram_username: null,
        wiki_url: null,
      },
      address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
      asset_contract_type: 'non-fungible',
      created_date: '2021-03-29T13:50:15.075765',
      name: 'PolkamonOfficialCollection',
      nft_version: '3.0',
      opensea_version: null,
      owner: null,
      schema_name: 'ERC721',
      symbol: 'PMONC',
      total_supply: '0',
      description:
        'Polkamon are beautifully animated digital collectibles with varying scarcities. Each Polkamon is backed by a truly unique NFT and can be unpacked with $PMON tokens.',
      external_link: 'https://polkamon.com',
      image_url:
        'https://lh3.googleusercontent.com/5ciPSamybZfmS8m45I1hXlUWKOIfAVLApQswnUaJvKHyHFbvPYEpSCkGqhH0TGn54QZCyKh-kzT2sxXIoe4e0aWcHYagwCO3cc_4=s120',
      default_to_fiat: false,
      dev_buyer_fee_basis_points: 0,
      dev_seller_fee_basis_points: 0,
      only_proxied_transfers: false,
      opensea_buyer_fee_basis_points: 0,
      opensea_seller_fee_basis_points: 250,
      buyer_fee_basis_points: 0,
      seller_fee_basis_points: 250,
      payout_address: null,
    },
    permalink: 'https://opensea.io/bundles/3-uniaqua-red-grrn-blue-cnr',
    sell_orders: [
      {
        created_date: '2021-04-11T02:15:34.901614',
        closing_date: '2021-04-11T03:25:00',
        closing_extendable: false,
        expiration_time: 1618111500,
        listing_time: 1618107223,
        order_hash: '0x5dec90e4baf8b668ea01260eb28e709382428e5c6dc09289dcfea83078b45dcc',
        metadata: {
          bundle: {
            assets: [
              {
                id: '1000070550',
                address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
              },
              {
                id: '1000187253',
                address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
              },
              {
                id: '1000187553',
                address: '0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d',
              },
            ],
            schemas: ['ERC721', 'ERC721', 'ERC721'],
            name: '3 uniaqua (red,grrn,blue)',
            description: '',
            external_link: '',
          },
        },
        exchange: '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
        maker: {
          user: 160290,
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/10.png',
          address: '0x7c23b1174d22d18964f80e0cc1b77dbb02582d06',
          config: '',
          discord_id: '',
        },
        taker: {
          user: 1766,
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/1.png',
          address: '0x0000000000000000000000000000000000000000',
          config: '',
          discord_id: '',
        },
        current_price: '98775024479840831.15500489597',
        current_bounty: '987750240818261',
        bounty_multiple: '0.01',
        maker_relayer_fee: '250',
        taker_relayer_fee: '0',
        maker_protocol_fee: '0',
        taker_protocol_fee: '0',
        maker_referrer_fee: '0',
        fee_recipient: {
          user: 3585,
          profile_img_url:
            'https://storage.googleapis.com/opensea-static/opensea-profile/28.png',
          address: '0x5b3256965e7c3cf26e11fcaf296dfc8807c01073',
          config: 'verified',
          discord_id: '',
        },
        fee_method: 1,
        side: 1,
        sale_kind: 1,
        target: '0xc99f70bfd82fb7c8f8191fdfbfb735606b15e5c5',
        how_to_call: 1,
        calldata:
          '0x68f0bcaa0000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000300000000000000000000000085f0e02cb992aa1f9f47112f815f519ef1a59e2d00000000000000000000000085f0e02cb992aa1f9f47112f815f519ef1a59e2d00000000000000000000000085f0e02cb992aa1f9f47112f815f519ef1a59e2d00000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000000000640000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000000000000000000000000000000000012c23b872dd0000000000000000000000007c23b1174d22d18964f80e0cc1b77dbb02582d060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003b9bdd9623b872dd0000000000000000000000007c23b1174d22d18964f80e0cc1b77dbb02582d060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003b9da57523b872dd0000000000000000000000007c23b1174d22d18964f80e0cc1b77dbb02582d060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003b9da6a10000000000000000000000000000000000000000',
        replacement_pattern:
          '0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        static_target: '0x0000000000000000000000000000000000000000',
        static_extradata: '0x',
        payment_token: '0x0000000000000000000000000000000000000000',
        payment_token_contract: {
          id: 1,
          symbol: 'ETH',
          address: '0x0000000000000000000000000000000000000000',
          image_url:
            'https://lh3.googleusercontent.com/7hQyiGtBt8vmUTq4T0aIUhIhT00dPhnav87TuFQ5cLtjlk724JgXdjQjoH_CzYz-z37JpPuMFbRRQuyC7I9abyZRKA',
          name: 'Ether',
          decimals: 18,
          eth_price: '1.000000000000000',
          usd_price: '2144.110000000000127000',
        },
        base_price: '100000000000000000',
        extra: '20000000000000004',
        quantity: '1',
        salt:
          '61130456863510647694608336782925402935823442954935513848647481444645487202945',
        v: 28,
        r: '0x3e8436b1d0aff88bcdb30608cc0e9f9c4a56d2f5b1462036e7f9341a3b85a2b8',
        s: '0x1aacdc092da0953b43ba8a9674446b3129d118969690e4c701d7f2fd6990fa40',
        approved_on_chain: false,
        cancelled: false,
        finalized: false,
        marked_invalid: false,
        prefixed_hash:
          '0x20c8b8dbb49f91ab0d46f96050100d1511546ec6df66aa93abdbc830d95c5dde',
      },
    ],
  })),
}
