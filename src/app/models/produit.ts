export interface User{
	id: number
	email: string
	password: string
	roles: string[]
	token?: string
}

export interface Produit {
	id: number
	nom: string
	image: string
	prix: number
	type?: Type
	menusBurgers?: MenusBurger[]
	menusPortionFrites?: MenusPortionFrite[]
	menusTailles?: MenusTaille[]
}

export interface Catalogue{
	burgers: Produit[],
	menus: Produit[]
}

export interface Type{
	id: number
	libele: string
}

export interface MenusBurger{
	id: number
	burger: Produit
	quantity: number
}

export interface MenusPortionFrite{
	id: number
	portionFrites: Produit
	quantity: number
}

export interface MenusTaille{
	id: number
	taille: Taille
	quantity: number
}

export interface Taille{
	id: number
	libele: string
	tailleBoissons: TailleBoisson[]
}

export interface TailleBoisson{
	id: number
	taille: Taille
	boisson: Produit
	quantity: number
	image: string
}