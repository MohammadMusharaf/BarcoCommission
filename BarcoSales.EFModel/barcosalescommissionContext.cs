using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BarcoSales.EFModel
{
    public partial class barcosalescommissionContext : DbContext
    {
        public barcosalescommissionContext()
        {
        }

        public barcosalescommissionContext(DbContextOptions<barcosalescommissionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Barcosaleshistory> Barcosaleshistory { get; set; }
        public virtual DbSet<Commissionrules> Commissionrules { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Customersalesperson> Customersalesperson { get; set; }
        public virtual DbSet<Factory> Factory { get; set; }
        public virtual DbSet<Factorycategory> Factorycategory { get; set; }
        public virtual DbSet<Salesman> Salesman { get; set; }
        public virtual DbSet<Salestrasaction> Salestrasaction { get; set; }
        public virtual DbSet<Sysdiagrams> Sysdiagrams { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySql("server=localhost;port=3306;database=barcosalescommission;uid=root;password=root", x => x.ServerVersion("8.0.29-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Barcosaleshistory>(entity =>
            {
                entity.HasKey(e => e.BarcoSalesId)
                    .HasName("PRIMARY");

                entity.ToTable("barcosaleshistory");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ExtPrice).HasColumnType("decimal(10,0)");

                entity.Property(e => e.FinYear).HasDefaultValueSql("'22'");

                entity.Property(e => e.ShipToAddress)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToCity)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToName)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToState)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToAddress)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToCity)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToName)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToState)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Commissionrules>(entity =>
            {
                entity.ToTable("commissionrules");

                entity.HasIndex(e => e.CustId)
                    .HasName("FK_CommissionRules_Customer");

                entity.HasIndex(e => e.FactoryId)
                    .HasName("FK_CommissionRules_Factory");

                entity.Property(e => e.CommisionRate).HasColumnType("decimal(19,4)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.FinYear).HasDefaultValueSql("'22'");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustId)
                    .HasName("PRIMARY");

                entity.ToTable("customer");

                entity.Property(e => e.Address)
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.City)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Contact)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.CustAliasName)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CustomerCode)
                    .IsRequired()
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CustomerName)
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.EmailId)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Mobile)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Phone)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincCode)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SalesmanId)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.State)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Territory)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Zip)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Customersalesperson>(entity =>
            {
                entity.ToTable("customersalesperson");

                entity.HasIndex(e => e.CustId)
                    .HasName("FK_CustomerSalesPerson_Customer");

                entity.HasIndex(e => e.SalesId)
                    .HasName("FK_CustomerSalesPerson_SalesPerson");

                entity.Property(e => e.Commision).HasColumnType("decimal(19,4)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ExtPrice).HasColumnType("decimal(10,0)");

                entity.Property(e => e.ShipToAddress)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToCity)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToName)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToState)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToAddress)
                    .HasColumnType("varchar(450)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SoldToState)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Factory>(entity =>
            {
                entity.ToTable("factory");

                entity.HasIndex(e => e.FactoryCategoryId)
                    .HasName("FK_Factory_FactoryCategory");

                entity.Property(e => e.CommissionRate).HasColumnType("decimal(19,4)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.FactoryName)
                    .IsRequired()
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Princcode)
                    .HasColumnName("princcode")
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Factorycategory>(entity =>
            {
                entity.ToTable("factorycategory");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.FactoryCategoryName)
                    .IsRequired()
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Salesman>(entity =>
            {
                entity.ToTable("salesman");

                entity.Property(e => e.SalesmanId).HasDefaultValueSql("'1'");

                entity.Property(e => e.Address)
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.City)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Designation)
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.EmailId)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Mobile)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SalesmanCode)
                    .IsRequired()
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SalesmanName)
                    .IsRequired()
                    .HasColumnType("varchar(256)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.State)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Zip)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Salestrasaction>(entity =>
            {
                entity.HasKey(e => e.TrasactionId)
                    .HasName("PRIMARY");

                entity.ToTable("salestrasaction");

                entity.HasIndex(e => e.CustId)
                    .HasName("FK_SalesTrasaction_Customer");

                entity.HasIndex(e => e.FactoryId)
                    .HasName("FK_SalesTrasaction_Factory");

                entity.HasIndex(e => e.SalesId)
                    .HasName("FK_SalesTrasaction_SalesPerson");

                entity.Property(e => e.ActualCommAmt).HasColumnType("decimal(19,4)");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ExtPrice).HasColumnType("decimal(19,4)");

                entity.Property(e => e.FinYear).HasDefaultValueSql("'22'");

                entity.Property(e => e.GrossCommAmt).HasColumnType("decimal(19,4)");

                entity.Property(e => e.GrossCommRate).HasColumnType("decimal(19,4)");

                entity.Property(e => e.ShipToAddress)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToCity)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToName)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ShipToState)
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UpdatedDate)
                    .HasColumnType("timestamp")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");
            });

            modelBuilder.Entity<Sysdiagrams>(entity =>
            {
                entity.HasKey(e => e.DiagramId)
                    .HasName("PRIMARY");

                entity.ToTable("sysdiagrams");

                entity.HasIndex(e => new { e.PrincipalId, e.Name })
                    .HasName("UK_principal_name")
                    .IsUnique();

                entity.Property(e => e.DiagramId).HasColumnName("diagram_id");

                entity.Property(e => e.Definition).HasColumnName("definition");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasColumnType("varchar(160)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincipalId).HasColumnName("principal_id");

                entity.Property(e => e.Version).HasColumnName("version");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
