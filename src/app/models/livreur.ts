import { User } from "./produit"

export interface Livreur {
	etat: string
	matriculeMoto: string
	livraisons: Livraison[]
	phone: string
	prenom: string
	nom: string
	id: number
}
  
  export interface Livraison {
	id: number
	zone: Zone
	commandes: Commande[]
  }
  
  export interface Zone {
	id: number
	nom: string
	prixLivraison: number
	commandes: Commande[]
  }
  
  export interface Commande {
	id: number
	prixTotal: number
	status: string
	createAt: string
	client?: Client
  }

  export interface Client{
	id: number
	prenom: string
	nom: string
	phone: string
	commandes: Commande[]
  }