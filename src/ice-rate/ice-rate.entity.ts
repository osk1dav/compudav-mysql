import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";
import { Product } from "./../product/product.entity";

@Entity()
export class IceRate {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, unique: true })
    name: string;

    @Column({ length: 6 })
    code: string;

    @Column({ length: 4, nullable: true })
    ad_valorem: string;

    @Column({ default: true })
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    modified_at: Date;

    @VersionColumn({nullable: true})
    revision: number;
    
    @OneToMany(type => Product, product => product.iceRate)
    products: Product[];
}