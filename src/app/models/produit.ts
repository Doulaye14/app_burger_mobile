export interface Produit {
	id: number
	nom: string
	image: string
	prix: number
}

export interface Catalogue{
	burgers: Produit[],
	menus: Produit[]
}
