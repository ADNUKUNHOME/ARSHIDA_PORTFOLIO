export type Project = {
    id: number;
    title: string;
    slug: string;
    category: 'residential' | 'commercial' | 'minimal';
    image: string;
    description: string;
    gallery: string[];
};

export const projects: Project[] = [
    {
        id: 1,
        title: 'Modern Living Space',
        slug: 'modern-living-space',
        category: 'residential',
        image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A modern living space crafted with neutral tones, open layouts, and a balance between comfort and elegance.',
        gallery: [
            'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        ],
    },
    {
        id: 2,
        title: 'Luxury Bedroom',
        slug: 'luxury-bedroom',
        category: 'residential',
        image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A calm and luxurious bedroom designed with soft textures, warm lighting, and a hotel-style comfort.',
        gallery: [
            'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
            'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
        ],
    },
    {
        id: 3,
        title: 'Contemporary Kitchen',
        slug: 'contemporary-kitchen',
        category: 'residential',
        image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A contemporary kitchen focusing on clean lines, smart storage, and functional cooking zones.',
        gallery: [
            'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg',
            'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
        ],
    },
    {
        id: 4,
        title: 'Office Space',
        slug: 'office-space',
        category: 'commercial',
        image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A professional office interior designed to boost productivity, collaboration, and comfort.',
        gallery: [
            'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
            'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
        ],
    },
    {
        id: 5,
        title: 'Minimalist Design',
        slug: 'minimalist-design',
        category: 'minimal',
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A minimalist interior that focuses on simplicity, clean surfaces, and purposeful design.',
        gallery: [
            'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
            'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
            'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
        ],
    },
    {
        id: 6,
        title: 'Elegant Dining',
        slug: 'elegant-dining',
        category: 'residential',
        image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'An elegant dining space designed for comfort, social interaction, and visual harmony.',
        gallery: [
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
            'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        ],
    },
    {
        id: 7,
        title: 'Retail Interior',
        slug: 'retail-interior',
        category: 'commercial',
        image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A retail interior designed to enhance customer experience and product visibility.',
        gallery: [
            'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
            'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
            'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
        ],
    },
    {
        id: 8,
        title: 'Serene Bathroom',
        slug: 'serene-bathroom',
        category: 'minimal',
        image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A serene bathroom designed with spa-like elements, soft lighting, and minimal aesthetics.',
        gallery: [
            'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
            'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
            'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
        ],
    },
    {
        id: 9,
        title: 'Cozy Living Room',
        slug: 'cozy-living-room',
        category: 'residential',
        image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description:
            'A cozy living room focused on warmth, soft furniture, and an inviting atmosphere.',
        gallery: [
            'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
            'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
            'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
        ],
    },
];
