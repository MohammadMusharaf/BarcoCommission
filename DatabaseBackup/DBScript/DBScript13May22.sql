USE [BarcoSalesCommission]
GO
/****** Object:  Table [dbo].[CommissionRules]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommissionRules](
	[CommissionRulesId] [bigint] IDENTITY(1,1) NOT NULL,
	[CustId] [bigint] NOT NULL,
	[FactoryId] [bigint] NOT NULL,
	[CommisionRate] [money] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_CommissionRules] PRIMARY KEY CLUSTERED 
(
	[CommissionRulesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustId] [bigint] IDENTITY(1,1) NOT NULL,
	[CustName] [nvarchar](256) NOT NULL,
	[CustCompanyName] [nvarchar](50) NULL,
	[CustCompanyCode] [nvarchar](50) NULL,
	[CustEmailId] [nvarchar](50) NULL,
	[CustAddress] [nvarchar](256) NULL,
	[CustCity] [nvarchar](50) NULL,
	[CustState] [nvarchar](50) NULL,
	[CustZip] [nvarchar](50) NULL,
	[CustContactPerson] [nvarchar](50) NULL,
	[CustMobileNo] [nvarchar](50) NULL,
	[CustPhoneNo] [nvarchar](50) NULL,
	[CustFaxNo] [nvarchar](50) NULL,
	[CustTerritory] [nvarchar](50) NULL,
	[CustPrincCode] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[UpdatedBy] [bigint] NULL,
	[IsActive] [bit] NULL,
 CONSTRAINT [PK_Customer_CustId] PRIMARY KEY CLUSTERED 
(
	[CustId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Factory]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Factory](
	[FactoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[FactoryCategoryId] [bigint] NOT NULL,
	[FactoryName] [nvarchar](256) NOT NULL,
	[princcode] [nvarchar](256) NULL,
	[CommissionRate] [money] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Factory_FactoryId] PRIMARY KEY CLUSTERED 
(
	[FactoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FactoryCategory]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FactoryCategory](
	[FactoryCategoryId] [bigint] IDENTITY(1,1) NOT NULL,
	[FactoryCategoryName] [nvarchar](256) NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NOT NULL,
	[IsActive] [bigint] NOT NULL,
 CONSTRAINT [PK_FactoryCategory_FactoryCategoryId] PRIMARY KEY CLUSTERED 
(
	[FactoryCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesPerson]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesPerson](
	[SalesId] [bigint] IDENTITY(1,1) NOT NULL,
	[SalesPersonName] [nvarchar](256) NOT NULL,
	[SalesPersonDesignation] [nvarchar](256) NULL,
	[SalesPersonEmailId] [nvarchar](50) NULL,
	[JoiningDate] [datetime] NULL,
	[SalesPersonAddress] [nvarchar](256) NULL,
	[City] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Zip] [nvarchar](50) NULL,
	[MobileNo] [nvarchar](50) NULL,
	[PhoneNo] [nvarchar](50) NULL,
	[FaxNo] [nvarchar](50) NULL,
	[Territory] [nvarchar](50) NULL,
	[PrincCode] [nvarchar](50) NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_SalesPerson_SalesId] PRIMARY KEY CLUSTERED 
(
	[SalesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SalesTrasaction]    Script Date: 13-05-2022 17:43:06 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesTrasaction](
	[TrasactionId] [bigint] IDENTITY(1,1) NOT NULL,
	[InvoiceNo] [bigint] NULL,
	[CustId] [bigint] NOT NULL,
	[SalesId] [bigint] NOT NULL,
	[FactoryId] [bigint] NOT NULL,
	[CommissionRulesId] [bigint] NOT NULL,
	[ShipToName] [nvarchar](50) NULL,
	[ShipToAddress] [nvarchar](50) NULL,
	[ShipToCity] [nvarchar](50) NULL,
	[ShipToState] [nvarchar](50) NULL,
	[ExtPrice] [money] NULL,
	[GrossCommRate] [money] NOT NULL,
	[GrossCommAmt] [money] NOT NULL,
	[ActualCommAmt] [money] NOT NULL,
	[CreatedDate] [datetime] NOT NULL,
	[CreatedBy] [bigint] NOT NULL,
	[UpdatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_SalesTrasaction_TrasactionId] PRIMARY KEY CLUSTERED 
(
	[TrasactionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([CustId], [CustName], [CustCompanyName], [CustCompanyCode], [CustEmailId], [CustAddress], [CustCity], [CustState], [CustZip], [CustContactPerson], [CustMobileNo], [CustPhoneNo], [CustFaxNo], [CustTerritory], [CustPrincCode], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (1, N'Musharaf', N'Cq lts', N'ADsys', N'adsys@gail.com', N'LF flan', N'CD', N'LF', N'25533', NULL, NULL, NULL, NULL, NULL, NULL, CAST(N'2022-05-11T20:05:11.810' AS DateTime), 101, CAST(N'2022-05-11T20:05:11.810' AS DateTime), 101, 1)
INSERT [dbo].[Customer] ([CustId], [CustName], [CustCompanyName], [CustCompanyCode], [CustEmailId], [CustAddress], [CustCity], [CustState], [CustZip], [CustContactPerson], [CustMobileNo], [CustPhoneNo], [CustFaxNo], [CustTerritory], [CustPrincCode], [CreatedDate], [CreatedBy], [UpdatedDate], [UpdatedBy], [IsActive]) VALUES (2, N'Musharaf', N'Cq lts', N'ADsys', N'adsys@gail.com', N'LF flan', N'CD', N'LF', N'25533', NULL, NULL, NULL, NULL, NULL, NULL, CAST(N'2022-05-11T20:44:40.597' AS DateTime), 101, CAST(N'2022-05-11T20:44:40.597' AS DateTime), 101, 1)
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
ALTER TABLE [dbo].[CommissionRules] ADD  CONSTRAINT [DF_CommissionRules_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[CommissionRules] ADD  CONSTRAINT [DF_CommissionRules_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF_Customer_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Customer] ADD  CONSTRAINT [DF_Customer_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[Factory] ADD  CONSTRAINT [DF_Factory_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[Factory] ADD  CONSTRAINT [DF_Factory_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[FactoryCategory] ADD  CONSTRAINT [DF_FactoryCategory_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[FactoryCategory] ADD  CONSTRAINT [DF_FactoryCategory_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[SalesPerson] ADD  CONSTRAINT [DF_SalesPerson_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[SalesPerson] ADD  CONSTRAINT [DF_SalesPerson_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[SalesTrasaction] ADD  CONSTRAINT [DF_SalesTrasaction_CreatedDate]  DEFAULT (getdate()) FOR [CreatedDate]
GO
ALTER TABLE [dbo].[SalesTrasaction] ADD  CONSTRAINT [DF_SalesTrasaction_UpdatedDate]  DEFAULT (getdate()) FOR [UpdatedDate]
GO
ALTER TABLE [dbo].[CommissionRules]  WITH CHECK ADD  CONSTRAINT [FK_CommissionRules_Customer] FOREIGN KEY([CustId])
REFERENCES [dbo].[Customer] ([CustId])
GO
ALTER TABLE [dbo].[CommissionRules] CHECK CONSTRAINT [FK_CommissionRules_Customer]
GO
ALTER TABLE [dbo].[CommissionRules]  WITH CHECK ADD  CONSTRAINT [FK_CommissionRules_Factory] FOREIGN KEY([FactoryId])
REFERENCES [dbo].[Factory] ([FactoryId])
GO
ALTER TABLE [dbo].[CommissionRules] CHECK CONSTRAINT [FK_CommissionRules_Factory]
GO
ALTER TABLE [dbo].[Factory]  WITH CHECK ADD  CONSTRAINT [FK_Factory_FactoryCategory] FOREIGN KEY([FactoryCategoryId])
REFERENCES [dbo].[FactoryCategory] ([FactoryCategoryId])
GO
ALTER TABLE [dbo].[Factory] CHECK CONSTRAINT [FK_Factory_FactoryCategory]
GO
ALTER TABLE [dbo].[SalesTrasaction]  WITH CHECK ADD  CONSTRAINT [FK_SalesTrasaction_Customer] FOREIGN KEY([CustId])
REFERENCES [dbo].[Customer] ([CustId])
GO
ALTER TABLE [dbo].[SalesTrasaction] CHECK CONSTRAINT [FK_SalesTrasaction_Customer]
GO
ALTER TABLE [dbo].[SalesTrasaction]  WITH CHECK ADD  CONSTRAINT [FK_SalesTrasaction_Factory] FOREIGN KEY([FactoryId])
REFERENCES [dbo].[Factory] ([FactoryId])
GO
ALTER TABLE [dbo].[SalesTrasaction] CHECK CONSTRAINT [FK_SalesTrasaction_Factory]
GO
ALTER TABLE [dbo].[SalesTrasaction]  WITH CHECK ADD  CONSTRAINT [FK_SalesTrasaction_SalesPerson] FOREIGN KEY([SalesId])
REFERENCES [dbo].[SalesPerson] ([SalesId])
GO
ALTER TABLE [dbo].[SalesTrasaction] CHECK CONSTRAINT [FK_SalesTrasaction_SalesPerson]
GO
