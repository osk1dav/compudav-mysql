import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, VersionColumn, OneToMany } from "typeorm";

import { Product } from "./../product/product.entity";

@Entity()
export class UnitMeasurement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255, unique: true })
    name: string;

    @Column({ length: 45, nullable: true })
    symbol: string;

    @Column({ type: "smallint", unique: true })
    sort: number;

    @Column({ default: true })
    status: boolean;
    
    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    modified_at: Date;
    
    @VersionColumn({nullable: true})
    revision: number;
    
    @OneToMany(type => Product, product => product.unitMeasurement)
    products: Product[];

}
