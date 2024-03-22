import { ProductByCategory } from "@/types";


export const categories = ['Positioner', 'Automotive', 'EFH', 'Solenoid valve', 'Smart Positioner', 'Angle Seat  Valve'];

export const productsByCategory: ProductByCategory[] = [
    {
        categoryId: 1,
        category: 'Positioner',
        subCategory: [
            {
                id: 1,
                name: 'Transmitter',
                type: [
                    {
                        name: "Transmitter",
                        products: [
                            {
                                id: 1,
                                name: 'PTR',
                                description: 'Tramsmitter',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/PTR.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV015',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    }
                ]

            },
            {
                id: 2,
                name: 'Pneumatic-Positioner',
                type: [
                    {
                        name: "With-Transmitter",
                        products: [
                            {
                                id: 2,
                                name: 'RTX1200-PT',
                                description: 'With Transmitter',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1200-PT.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1200-PT',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                            {
                                id: 3,
                                name: 'RTX1300-PT',
                                description: 'With Transmitter',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1300-PT.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1300-PT',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },

                        ]
                    },
                    {
                        name: 'Rotary',
                        products: [
                            {
                                id: 4,
                                name: 'RTX1200-R-XXXX',
                                description: 'Rotary',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1200-R-XXXX.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1200-R-XXXX',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                            {
                                id: 5,
                                name: 'RTX1300',
                                description: 'Rotary',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1300.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1300',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Electro-Pneumatic-Positioner',
                type: [
                    {
                        name: "With-Transmitter",
                        products: [
                            {
                                id: 6,
                                name: 'RTX1000-PT',
                                description: 'With Transmitter',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000-PT.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000-PT',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },

                        ]
                    },
                    {
                        name: 'Rotary',
                        products: [

                            {
                                id: 7,
                                name: 'RTX1000-R',
                                description: 'Rotary',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000-R.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000-R',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },

                        ]
                    },
                    {
                        name: 'Linear',
                        products: [

                            {
                                id: 9,
                                name: 'RTX1000-L',
                                description: 'Linear',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000-L.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000-L',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    },
                    {
                        name: 'Explosion-Proof-Intrinsically-Safe',
                        products: [

                            {
                                id: 10,
                                name: 'RTX1000I',
                                description: 'Linear',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000I.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000I',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    },
                    {
                        name: 'Rotary-Explosion-Proof',
                        products: [

                            {
                                id: 11,
                                name: 'RTX1000E-R',
                                description: 'Rotary Explosion Proof',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000E-R.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000E-R',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    },
                    {
                        name: 'Linear-Explosion-Proof',
                        products: [

                            {
                                id: 12,
                                name: 'RTX1000E-L',
                                description: 'Linear Explosion Proof',
                                price: 100,
                                certificates: 'certificates',
                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/RTX1000E-L.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'RTX1000E-L',
                                        Application: '',
                                        FunctionType: '',
                                        TemperatureRange: '',
                                        MinPressure: '',
                                        MaxPressure: '',
                                        Media: '',
                                    }
                                
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        categoryId: 2,
        category: 'Automotive',
        subCategory: [
            {
                id: 4,
                name: 'Hydrocarbon-dosing-Valve',
                type: [
                    {
                        name: "5-Port",
                        products: [
                            {
                                id: 13,
                                name: 'AHI',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_1.jpg'
                                    }, {
                                        view: 'SV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_2.jpg'

                                    },
                                    {
                                        view: 'FV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_3.jpg'
                                    },
                                    {
                                        view: 'UP-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_4.jpg'
                                    },
                                    {
                                        view: 'DV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_5.jpg'
                                    },
                                    {
                                        view: 'DV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV126_6.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'AHI',
                                        Application: 'Engine & Exhaust After Treatment',
                                        FunctionType: "Exhaust After Treatment",
                                        TemperatureRange: "-40 to 150",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Fuel & Pneumatic"
                                    }
                                
                            }
                        ]
                    }
                ]

            },
            {
                id: 5,
                name: 'PTO-Diff-Lock-&-Exhaust-Brake',
                type: [
                    {
                        name: "32-valve",
                        products: [
                            {
                                id: 14,
                                name: 'Magnetic Valve',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_1.jpg'
                                    }, {
                                        view: 'SV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_2.jpg'

                                    },
                                    {
                                        view: 'FV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_3.jpg'
                                    },
                                    {
                                        view: 'UP-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_4.jpg'
                                    },
                                    {
                                        view: 'DV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_5.jpg'
                                    },
                                    {
                                        view: 'DV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV031_6.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV031',
                                        Application: 'Chassic',
                                        FunctionType: "Engine",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                ]
            },
            {
                id: 6,
                name: 'Tipper',
                type: [
                    {
                        name: "5-port-3-position-valve-with-integrated-solenoid-valve",
                        products: [
                            {
                                id: 15,
                                name: 'Cabin Control Valve Integrated SOV',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV106.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV106',
                                        Application: 'Cabin',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                    {
                        name: "5-port-4-position-valve",
                        products: [
                            {
                                id: 16,
                                name: 'Cabin Control Valve -UBT',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV024_1.jpg'
                                    },
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV024_2.jpg'
                                    },
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV024_3.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV024',
                                        Application: 'Cabin',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                    {
                        name: "5-port-3-position-valve",
                        products: [
                            {
                                id: 17,
                                name: 'Cabin Control Valve -FET',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV102.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV102',
                                        Application: 'Cabin',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                name: 'Lift-Axle-Control-Module',
                type: [
                    {
                        name: "52-solenoid-valve",
                        products: [
                            {
                                id: 18,
                                name: 'Lift Axle Control valve',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV106.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'Lift Axle Control valve',
                                        Application: 'Chassis',
                                        FunctionType: "Lift Axle",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                ]
            },
            {
                id: 8,
                name: 'Electronically-controlled-Air-suspension',
                type: [
                    {
                        name: "Solenoid-manifold-valve",
                        products: [
                            {
                                id: 19,
                                name: 'ECAS',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV106.jpg'
                                    }
                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'Lift Axle Control valve',
                                        Application: 'Chassis',
                                        FunctionType: "Air suspension",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                ]
            },
            {
                id: 9,
                name: 'PTO-Diff-Lock',
                type: [
                    {
                        name: "3-Port",
                        products: [
                            {
                                id: 20,
                                name: 'DICV PTO SOV G131',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV015_1.jpg'
                                    },
                                    {
                                        view: 'SV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV015_2.jpg'

                                    },
                                    {
                                        view: 'FV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV015_3.jpg'
                                    },
                                    {
                                        view: 'UP-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV015_4.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV015',
                                        Application: 'Transmission',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            },
                            {
                                id: 21,
                                name: 'DICV PTO SOV G85',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014.jpg'
                                    },
                                    {
                                        view: 'SV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_2.jpg'

                                    },
                                    {
                                        view: 'FV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_3.jpg'
                                    },
                                    {
                                        view: 'UP-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_4.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV014',
                                        Application: 'Transmission',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            },
                            {
                                id: 22,
                                name: 'PTO Solenoid Valve 12V',
                                description: 'CV',
                                price: 100,
                                certificates: 'certificates',

                                images: [
                                    {
                                        view: 'SV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_1.jpg'
                                    },
                                    {
                                        view: 'SV-2',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_2.jpg'

                                    },
                                    {
                                        view: 'FV-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_3.jpg'
                                    },
                                    {
                                        view: 'UP-1',
                                        image: 'https://thestagingservers.com/rotex/wp-content/uploads/2023/06/LV014_4.jpg'
                                    },

                                ],
                                download: 'https://thestagingservers.com/rotex/wp-content/uploads/product-catalog/Positioner.pdf',
                                specifications: 
                                    {
                                        model: 'LV119',
                                        Application: 'Transmission',
                                        FunctionType: "PTO",
                                        TemperatureRange: "-25 to 85",
                                        MinPressure: '0',
                                        MaxPressure: '10',
                                        Media: "Pneumatic"
                                    }
                                
                            }
                        ]
                    },
                ]
            },
        ]
    },

]